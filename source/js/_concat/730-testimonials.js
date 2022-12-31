$(function() {
	var $elem = $(".testimonials-list");

	$elem.each(function() {
		var self = $(this);

		self.carouFredSel({
			/*responsive: true,*/
			width: "auto",
			items: {
				visible: 1
			},
			scroll: {
				items: 1,
				easing: "easeInOutQuint",
				duration: 750
			},
			auto: {
				play: false
			},
			'prev': {button: self.prev()},
			'next': {button: self.next()}
		},
		{
			transition: true,
			wrapper: {
				classname: "testimonials-carousel"
			}
		});

		var base = "x";
		var scrollOptions = {
			scroll: {
				easing: "easeInOutQuint",
				duration: 750
			}
		};

		self.swipe({
			fallbackToMouseEvents: true,
			allowPageScroll: "vertical",
			excludedElements: "button, input, select, textarea, .noSwipe",
			swipeStatus: function(event, phase, direction, distance, fingerCount, fingerData ) {
				/*if(!self.is(":animated") && (!$(".control-for-" + self.attr("id")).length || ($(".control-for-" + self.attr("id")).length && !$(".control-for-" + self.attr("id")).is(":animated"))))*/
				if (!self.is(":animated")) {
					self.trigger("isScrolling", function(isScrolling) {
						if(!isScrolling) {
							if (phase == "move" && (direction == "left" || direction == "right")) {
								if(base=="x") {
									self.trigger("configuration", scrollOptions);
									self.trigger("pause");
								}
								if (direction == "left") {
									if(base=="x")
										base = 0;
									self.css("left", parseInt(base, 10)-distance + "px");
								}
								else if (direction == "right") {
									if(base=="x" || base==0) {
										self.children().last().prependTo(self);
										base = -self.children().first().width();
									}
									self.css("left", base+distance + "px");
								}
							}
							else if (phase == "cancel") {
								if(distance!=0) {
									self.trigger("play");
									self.animate({
										"left": base + "px"
									}, 750, "easeInOutQuint", function() {
										if(base==-self.children().first().width()) {
											self.children().first().appendTo(self);
											self.css("left", "0px");
											base = "x";
										}
										self.trigger("configuration", {scroll: {
											easing: "easeInOutQuint",
											duration: 750
										}});
									});
								}
							}
							else if (phase == "end") {
								self.trigger("play");
								if (direction == "right") {
									self.animate({
										"left": 0 + "px"
									}, 750, "easeInOutQuint", function(){
										self.trigger("configuration", {scroll: {
											easing: "easeInOutQuint",
											duration: 750
										}});
										base = "x";
									});
								}
								else if (direction == "left") {
									if(base==-self.children().first().width()) {
										self.children().first().appendTo(self);
										self.css("left", (parseInt(self.css("left"), 10)-base)+"px");
									}

									self.trigger("nextPage");
									base = "x";
								}
							}
						}
					});
}
}
});
});

$(window).on('resize orientationchange', function () {
	$elem.trigger('configuration', ['debug', false, true]);
});
});
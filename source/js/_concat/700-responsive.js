// Currently no re-smart-column class elements

// $(function() {
// 	var $window = $(window);

// 	$window.on('resize orientationchange', function () {
// 		if($(".re-smart-column").length && $(".header").width()>462) {
// 			var topOfWindow = $window.scrollTop();

// 			$(".re-smart-column").each(function() {
// 				var $this = $(this);
// 				var row = $this.parent();
// 				var wrapper = $this.children().first();
// 				var childrenHeight = 0;

// 				wrapper.children().each(function() {
// 					childrenHeight += $(this).outerHeight(true);
// 				});

// 				if(childrenHeight<$window.height() && row.offset().top-20<topOfWindow && row.offset().top-20+row.outerHeight()-childrenHeight>topOfWindow) {
// 					wrapper.css({"position": "fixed", "bottom": "auto", "top": "20px", "width": $this.width() + "px"});
// 					$this.css({"height": childrenHeight+"px"});
// 				}
// 				else if(childrenHeight<$window.height() && row.offset().top-20+row.outerHeight()-childrenHeight<=topOfWindow && (row.outerHeight()-childrenHeight>0)) {
// 					wrapper.css({"position": "absolute", "bottom": "0", "top": (row.outerHeight()-childrenHeight) + "px", "width": "auto"});
// 					$this.css({"height": childrenHeight+"px"});
// 				}
// 				else if(childrenHeight>=$window.height() && row.offset().top+20+childrenHeight<topOfWindow+$window.height() && row.offset().top+20+row.outerHeight()>topOfWindow+$window.height()) {
// 					wrapper.css({"position": "fixed", "bottom": "20px", "top": "auto", "width": $this.width() + "px"});
// 					$this.css({"height": childrenHeight+"px"});
// 				}
// 				else if(childrenHeight>=$window.height() && row.offset().top+20+row.outerHeight()<=topOfWindow+$window.height() && (row.outerHeight()-childrenHeight>0)) {
// 					wrapper.css({"position": "absolute", "bottom": "0", "top": (row.outerHeight()-childrenHeight) + "px", "width": "auto"});
// 					$this.css({"height": childrenHeight+"px"});
// 				}
// 				else {
// 					wrapper.css({"position": "static", "bottom": "auto", "top": "auto", "width": "auto"});
// 				}
// 			});
// }
// });
// });
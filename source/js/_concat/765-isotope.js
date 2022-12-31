// Currently no isotope class elements
// If using, also uncomment jQuery plugin

// $(function() {
// 	$(".isotope").isotope({
// 		masonry: {
// 			/*columnWidth: 225,*/
// 			gutter: 30
// 		}
// 	});

// 	$(window).on("hashchange", function(event) {
// 		var $param_fragment = $.param.fragment();
// 		var hashSplit = $param_fragment.split("-");

// 		/*trigger event*/
// 		if (hashSplit[0] === "filter") {
// 			var filterClass = decodeURIComponent($.param.fragment()).substr(7, decodeURIComponent($.param.fragment()).length);

// 			/*apply options from hash*/
// 			$(".isotope-filters a").removeClass("selected");

// 			var $elem = $('.isotope-filters a[href="#filter-' + filterClass + '"]');
// 			if($elem.length)
// 				$elem.addClass("selected");
// 			else
// 				$(".isotope-filters li:first a").addClass("selected");

// 			$(".isotope").isotope({filter: (filterClass!="*" ? "." : "") + filterClass});
// 		}
// 	}).trigger('hashchange');
// });
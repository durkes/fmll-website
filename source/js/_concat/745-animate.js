/*var menu_position defined in header*/

$(function() {
	var $window = $(window);

	function animateElements()
	{
		$('.animated, .sticky, .re-smart-column').each(function(){
			var $this = $(this);
			var elementPos = $this.offset().top;
			var topOfWindow = $window.scrollTop();

			if($this.hasClass("re-smart-column"))
			{
				var row = $this.parent();
				var wrapper = $this.children().first();
				var childrenHeight = 0;

				wrapper.children().each(function(){
					childrenHeight += $(this).outerHeight(true);
				});

				if(childrenHeight<$window.height() && row.offset().top-20<topOfWindow && row.offset().top-20+row.outerHeight()-childrenHeight>topOfWindow)
				{
					wrapper.css({"position": "fixed", "bottom": "auto", "top": "20px", "width": $this.width() + "px"});
					$this.css({"height": childrenHeight+"px"});
				}
				else if(childrenHeight<$window.height() && row.offset().top-20+row.outerHeight()-childrenHeight<=topOfWindow && (row.outerHeight()-childrenHeight>0))
				{
					wrapper.css({"position": "absolute", "bottom": "0", "top": (row.outerHeight()-childrenHeight) + "px", "width": "auto"});
					$this.css({"height": childrenHeight+"px"});
				}
				else if(childrenHeight>=$window.height() && row.offset().top+20+childrenHeight<topOfWindow+$window.height() && row.offset().top+20+row.outerHeight()>topOfWindow+$window.height())
				{
					wrapper.css({"position": "fixed", "bottom": "20px", "top": "auto", "width": $this.width() + "px"});
					$this.css({"height": childrenHeight+"px"});
				}
				else if(childrenHeight>=$window.height() && row.offset().top+20+row.outerHeight()<=topOfWindow+$window.height() && (row.outerHeight()-childrenHeight>0))
				{
					wrapper.css({"position": "absolute", "bottom": "0", "top": (row.outerHeight()-childrenHeight) + "px", "width": "auto"});
					$this.css({"height": childrenHeight+"px"});
				}
				else
					wrapper.css({"position": "static", "bottom": "auto", "top": "auto", "width": "auto"});
			}
			else if($this.hasClass("sticky"))
			{
				if(menu_position!=null)
				{
					if(menu_position<topOfWindow)
						$this.addClass("move");
					else
						$this.removeClass("move");
				}
			}
			else if(elementPos<topOfWindow+$window.height()-20)
			{
				if($this.hasClass("number") && !$this.hasClass("progress") && $this.is(":visible"))
				{
					$this.addClass("progress");
					if(typeof($this.data("value"))!="undefined")
					{
						var value = parseFloat($this.data("value").toString().replace(" ",""));
						$this.text(0);
						$this.text(value);
					}
				}
				else if(!$this.hasClass("progress"))
				{
					var elementClasses = $this.attr('class').split(' ');
					var animation = "fadeIn";
					var duration = 600;
					var delay = 0;
					if($this.hasClass("scroll-top"))
					{
						if(topOfWindow<$(document).height()/2)
						{
							if($this.hasClass("fadeIn") || $this.hasClass("fadeOut"))
								animation = "fadeOut";
							else
								animation = "";
							$this.removeClass("fadeIn");
						}
						else
							$this.removeClass("fadeOut");
					}
					for(var i=0; i<elementClasses.length; i++)
					{
						if(elementClasses[i].indexOf('animation-')!=-1)
							animation = elementClasses[i].replace('animation-', '');
						if(elementClasses[i].indexOf('duration-')!=-1)
							duration = elementClasses[i].replace('duration-', '');
						if(elementClasses[i].indexOf('delay-')!=-1)
							delay = elementClasses[i].replace('delay-', '');
					}
					$this.addClass(animation);
					$this.css({"animation-duration": duration + "ms"});
					$this.css({"animation-delay": delay + "ms"});
					$this.css({"transition-delay": delay + "ms"});
				}
			}
		});
}

setTimeout(animateElements, 1);
$window.scroll(animateElements);
});
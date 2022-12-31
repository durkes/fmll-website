$(function() {
	var preloader = function()
	{
		$(".services-list a>img, .projects-list:not('.isotope') a>img, .re-preload>img").each(function(){
			var $this = $(this);
			$this.before("<span class='re-preloader'></span>");
			$this.one("load", function(){
				$this.prev(".re-preloader").remove();
				$this.fadeTo("slow", 1, function(){
					$this.css("opacity", "");
				});
				$this.css("display", "block");
			}).each(function(){
				if(this.complete)
					$(this).load();
			});
		});

	};
	preloader();
});
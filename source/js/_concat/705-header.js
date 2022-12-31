var menu_position = null;
/*menu_position for animate*/

$(function() {
	var $toggle = $(".top-bar-container .toggle");

	$toggle.on("click", function (event) {
		event.preventDefault();

		var $this = $(this);

		$this.prev().slideToggle();
		$this.toggleClass("active");
	});


	var $container = $(".header-container");
	if($container.hasClass("sticky")) {
		menu_position = $container.offset().top;
		/*menu_position for animate*/
	}
});
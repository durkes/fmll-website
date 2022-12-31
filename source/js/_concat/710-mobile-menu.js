$(function() {
	var $menu = $(".site-menu");

	$(".site-menu-toggle").on("click", function(event){
		event.preventDefault();

		$menu.slideToggle(300);
	});
});
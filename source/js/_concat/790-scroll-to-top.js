$(function() {
	$("a.scroll-top").on("click", function() {
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});
});
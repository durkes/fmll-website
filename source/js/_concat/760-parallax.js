$(function() {
	if(!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/))
		$(".parallax").parallax({
			speed: 100,
			startPosition: 0
			/*,startPosition: -1500*/
		});
	else
		$(".parallax").addClass("cover");
});
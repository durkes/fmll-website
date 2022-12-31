$(function() {
	$('.revolution-slider').show().revolution({
		dottedOverlay:"none",
		delay:9000,
		startwidth:1170,
		startheight:600,
		hideThumbs:100,

		hideTimerBar:"on",

		thumbWidth:100,
		thumbHeight:50,
		thumbAmount:5,

		navigationType:"bullet",
		navigationArrows:"solo",
		navigationStyle:"preview1",

		touchenabled:"on",
		onHoverStop:"on",

		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,

		keyboardNavigation:"on",

		navigationHAlign:"center",
		navigationVAlign:"bottom",
		navigationHOffset:0,
		navigationVOffset:20,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"center",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"center",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,

		shadow:0,
		fullWidth:"on",
		fullScreen:"off",

		spinner:"spinner-cust",

		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,

		shuffle:"off",

		autoHeight:"off",
		forceFullWidth:"off",

		hideThumbsOnMobile:"on",
		hideNavDelayOnMobile:1500,
		hideBulletsOnMobile:"on",
		hideArrowsOnMobile:"on",
		hideThumbsUnderResolution:0,

		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		startWithSlide:0
	});
});
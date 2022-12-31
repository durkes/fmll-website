// Remove this module if not using <base href> in <head>

$(function() {
	var baseUrl = location.href.replace(/#.*$/, '');

	$( "a[href^='#']" ).each( function() {
		var $this = $( this );

		var longHref = baseUrl + $this.attr( 'href' );
		$this.attr( 'href', longHref );
	});
});
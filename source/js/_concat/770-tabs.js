$(function(){
	var $window = $(window);

	var tabs = $('.tabs'),
	tab_a_selector = 'ul.ui-tabs-nav a';
	tabs.tabs({
		event: 'change',
		show: true
	});

	tabs.find( tab_a_selector ).click(function(){
		var $this = $(this);

		var state = {},
		id = $this.closest( '.tabs' ).attr( 'id' ),
		idx = $this.parent().prevAll().length;

		state[ id ] = idx;
		$.bbq.pushState( state );

		$window.trigger('tabchange');
	});

	$window.on( 'tabchange', function(e) {
		tabs.each(function(){
			var idx = $.bbq.getState( this.id, true ) || 0;
			$(this).find( tab_a_selector ).eq( idx ).triggerHandler( 'change' );
		});
	}).trigger('tabchange');
});
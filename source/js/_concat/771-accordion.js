$(function(){
	var $window = $(window);

	var accordion = $('.accordion'),
	tab_a_selector = '.ui-accordion-header';
	accordion.accordion({
		event: 'change',
		heightStyle: 'content',
		icons: {header: 'custicon-arrow-circle-right', activeHeader: 'custicon-arrow-circle-down'}
	});

	accordion.find( tab_a_selector ).click(function(){
		var $this = $(this);

		var state = {},
		id = $this.closest( '.accordion' ).attr( 'id' ),
		idx = $this.parent().prevAll().length;

		state[ id ] = idx;
		$.bbq.pushState( state );

		$window.trigger('accordionchange');
	});

	$window.on( 'accordionchange', function(e) {
		accordion.each(function(){
			var idx = $.bbq.getState( this.id, true ) || 0;
			$(this).find( tab_a_selector ).eq( idx ).triggerHandler( 'change' );
		});
	}).trigger('accordionchange');
});
$('main').scrollspy({ target: '#mainNav' })

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-brand').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('body').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#navbarNav .navbar-nav a').on( 'click', function () {
	$( '#navbarNav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
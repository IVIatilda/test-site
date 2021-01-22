jQuery("document").ready(function(s){

	$("#phone").mask("+7 (999) 999-99-99");
	
	jQuery(".header-menu-button").click (function(){
		jQuery('.header-menu').addClass('active');
	});
	
	jQuery(".close-menu").click (function(){
		jQuery('.header-menu').removeClass('active');
	});
	
	jQuery(".modal-close").click (function(){
		jQuery('.modal-wrap').fadeOut(500);
	});

	jQuery(".product .button").click (function(){
		jQuery(this).text('Добавлено!');
	});


	jQuery('#form').submit(function( button ) {
		button.preventDefault();
		var form = jQuery(this);
		jQuery.ajax({
			url: './send.php',
			type: 'POST',
			data: form.serialize(),
			success: function( data ) {
				jQuery('#modalTetx').text('Сообщение отправлено!');
				jQuery('#formSent').fadeIn(500);
			},
			error: function( data ) {
				jQuery('#modalTetx').text('Ошибка при отправке.');
				jQuery('#formSent').fadeIn(500);
			}
		});
	});

});
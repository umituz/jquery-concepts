$(document).ready( function(){
	var default_mail = "Lütfen mail adresinizi giriniz.";
	var default_text = "Lütfen bu alanı doldurunuz.";
	var default_password = "Lütfen şifrenizi giriniz.";

	$('input[type="mail"]').attr('value',default_mail).focus( function(){
		if ($(this).val() == default_mail) {
			$(this).attr('value','');
		}
	}).blur( function(){
		if ($(this).val() == '') {
			$(this).attr('value', default_mail);
		}
	});

	$('input[type="text"]').attr('value',default_text).focus( function(){
		if ($(this).val() == default_text) {
			$(this).attr('value','');
		}
	}).blur( function(){
		if ($(this).val() == '') {
			$(this).attr('value', default_text);
		}
	});

	$('input[type="password"]').attr('value',default_password).focus( function(){
		if ($(this).val() == default_password) {
			$(this).attr('value','');
		}
	}).blur( function(){
		if ($(this).val() == '') {
			$(this).attr('value', default_password);
		}
	});

});

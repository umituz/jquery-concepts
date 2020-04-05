$(document).ready(function(){
	var text_maximum = 100;
	$('#textarea_durum').html('Karakter : '+ text_maximum );
	$('#alan').keyup(function(){
		var text_uzunluk = $('#alan').val().length;
		var text_kalan = text_maximum - text_uzunluk;
		$('#textarea_durum').html('Karakter : '+ text_kalan ); 
	});
});
$('#isim').focusin(function(){
	$('#sonuc').html("Adınızı girin");
});

$('#isim').focusout(function(){
	$('#sonuc').html('');
});

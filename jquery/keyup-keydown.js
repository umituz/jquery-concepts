/* $('#kullanici').keydown(function(){
	var kullanici = $('#kullanici').val();
	$('#goster').html(kullanici);
}); */

$('#kullanici').keyup(function(){
	var kullanici = $('#kullanici').val();
	$('#goster').html(kullanici);
});
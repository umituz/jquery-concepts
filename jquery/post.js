$('#buton').click(function(){
	var string = $('#string').val();
	var isim = $('#isim').val();
	$.post('linkler/02-degistir.php',{ string:string, isim:isim}, function(data){
		$('#sonuc').html(data);
	});
});
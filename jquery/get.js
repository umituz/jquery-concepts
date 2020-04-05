$('#buton').click(function(){
	var string = $('#string').val();
	$.get('linkler/01-degistir.php',{ degisken: string}, function(data){
		$('#sonuc').text(data);
	});
});
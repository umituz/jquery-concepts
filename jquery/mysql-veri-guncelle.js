$('#buton').click(function(){
	var isim = $('#isim').val();
	$('#sonuc').text('Veri güncelleniyor');
	$.post('53-ayarlar.php',{ isim:isim }, function(data){
		$('#sonuc').text(data);
	})
});
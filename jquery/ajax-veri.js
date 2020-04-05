$('#buton').click(function(){
	var isim = $('#isim').val();
	$.ajax({
		url: '52-getir.php',
		data: 'isim='+isim,
		success: function(data){
			$('#sonuc').html(data);
		}

	});
});
$('#buton').click(function(){
	$.ajax({
		url: '51-deneme.php',
		success: function(data){
			$('#sonuc').html(data);
		}

	});
});
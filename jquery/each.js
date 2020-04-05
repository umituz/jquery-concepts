$(document).ready(function(){
	$('#buton').click(function(){
		var paragraf_birlestir = '';
		$('input[type="text"]').each(function(){
			paragraf_birlestir += $(this).val()+' ';
		})
		$('#paragraf').text(paragraf_birlestir);
	});
});
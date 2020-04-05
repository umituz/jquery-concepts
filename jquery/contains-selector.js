$(document).ready( function(){

	$('#isim_ara').keyup( function(){

		isim_ara = $(this).val();

		$('#isimler li').removeClass('renklendir');

		if (jQuery.trim(isim_ara) != '') {
		$("#isimler li:contains('" + isim_ara + "')").addClass('renklendir');
		}
	});

});
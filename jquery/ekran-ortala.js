$(document).ready(function(){
	function div_ortala(){
		ekran_genislik = $(window).width();
		ekran_yukseklik = $(window).height();
		div_genislik = $('#kutu').width();
		div_yukseklik = $('#kutu').height();

		$('#kutu').css('top', (ekran_yukseklik / 2) - (div_yukseklik / 2)).css('left', (ekran_genislik / 2) - (div_genislik / 2));
	}

	div_ortala();
	$(window).resize(function(){
		div_ortala();
	});
});
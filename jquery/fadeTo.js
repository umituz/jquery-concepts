$(document).ready(function(){
	$('.resim').css('opacity','0.5');
	$('.resim').mouseover(function(){
		$(this).fadeTo(1000,1);
		$('.resim').not(this).fadeTo(1000, 0.4);
	});
});
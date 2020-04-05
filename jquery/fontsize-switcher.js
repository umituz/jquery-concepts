$(':text').focusin( function(){
	$(this).css('background-color','yellow');
});


$(':text').blur( function(){
	$(this).css('background-color','white');
});

$(':submit').click( function(){
	$(this).attr('value','Lütfen bekleyin...');
	$(this).attr('disabled', true);
});
// ID İLE YAPILAN 

/* $(document).ready( function(){
	$('#dosya').change( function(){
		$('#submit').removeAttr('disabled');
	});

}); */

// ID İLE YAPILMAYAN DİREK JQUERY İLE YAPILAN

$(document).ready( function(){
	$('input[type="file"]').change( function(){
		$(this).next().removeAttr('disabled');
	}).next().attr('disabled','disabled');

}); 


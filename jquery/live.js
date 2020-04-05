$(document).ready(function(){
	$('.golgeEtmeYeter').live({
		click: function(){
			$(this).after('<input type="button" id="golgeEtmeYeter" value="golgeEtmeYeter">');
		}
	});
});
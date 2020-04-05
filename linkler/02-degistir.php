<?php 

if (isset($_POST['string'])) {
	$string=$_POST['string'];
	$isim=$_POST['isim'];
	
	echo 'İsminiz : ',$isim,'<br> Mesajınız : ',$string;
}

 ?>
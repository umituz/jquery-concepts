<?php 

if (isset($_GET['degisken'])) {
	$string=$_GET['degisken'];
	echo strrev($string);
}

 ?>
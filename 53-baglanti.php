<?php 
session_start();
$_SESSION['yonetmen_id']=0;

try {	
	$db= new PDO("mysql:host=localhost;dbname=jquery",'root','');
} catch (PDOExpception $e) {
	echo $e->getMessage();
}

 ?>

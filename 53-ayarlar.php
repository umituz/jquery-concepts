<?php 
include '53-baglanti.php';

if (isset($_POST['isim'])) {

	$isim = $_POST['isim'];

	$ayarduzenle=$db->prepare("UPDATE deneme SET 
	yonetmen_ad=:ad	
	WHERE yonetmen_id={$_SESSION['yonetmen_id']}
	");
	$update=$ayarduzenle->execute(array(
	'ad' => $isim
	));
	if ($update)
	{
		echo "Güncelleme Başarılı"; 
	}
	else
	{
		echo "Güncelleme Başarısız";
	}
}

 ?>
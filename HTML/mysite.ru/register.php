<?
	$id = $_REQUEST['id'];	
	$fio = $_REQUEST['fio'];
	$sex = $_REQUEST['sex'];
	$idCity = $_REQUEST['city'];
	$pass = $_REQUEST['pass'];
	$descr = $_REQUEST['descr'];
	$agree = $_REQUEST['agree'];

	header('Content-Type: text/html; charset=utf-8');

	echo "<p>$id<p>$fio<p>$sex<p>$idCity<p>$pass<p>$descr<p>$agree";
?>
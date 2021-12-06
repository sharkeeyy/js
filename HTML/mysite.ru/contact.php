<?
	$fio = $_REQUEST['fio'];
	$message = $_REQUEST['message'];

	header('Content-Type: text/html; charset=utf-8');

	echo "<p>$fio";
	echo "<p>$message";
?>
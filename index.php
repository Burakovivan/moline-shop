<?php
$request = apache_request_headers();
// print_r(json_encode($_SERVER));
$ip = $request['X-Forwarded-For']; 
$mysqli = new mysqli("mysql.ukrdomen.com", "uh1117916_root", "yWO2u0yK4", "uh1117916_molineDb");
$result = $mysqli->query("SELECT COUNT(*) FROM `allowed_ip` where Ip = '".$ip."'");
$result = $result->fetch_assoc();
if(!$result['COUNT(*)'] > 0){
	if($_SERVER['REQUEST_URI'] == '/blablabla'){
		$result = $mysqli->query("INSERT INTO `allowed_ip` (`Ip`) VALUES ('" . $ip."')");
		$mysqli->close();
	}else{
		require_once("_index.html");
		$mysqli->close();
		exit();
	}
}
// Version
define('VERSION', '3.0.2.0');

// Configuration
if (is_file('config.php')) {
	require_once('config.php');
}

// Install
if (!defined('DIR_APPLICATION')) {
	header('Location: install/index.php');
	exit;
}

// Startup
require_once(DIR_SYSTEM . 'startup.php');

start('catalog');
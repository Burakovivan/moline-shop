<?php
// HTTP
// define('HTTP_SERVER', 'http://moline.com.ua/');
define('HTTP_SERVER', 'http://localhost/');

// HTTPS
// define('HTTPS_SERVER', 'http://moline.com.ua/');
define('HTTPS_SERVER', 'http://localhost/');
 
// DIR
define('DIR_APPLICATION', str_replace('\\','/',__DIR__ ). '/catalog/');
define('DIR_SYSTEM',  str_replace('\\','/',__DIR__ ). '/system/');
define('DIR_IMAGE',  str_replace('\\','/',__DIR__ ). '/image/');
define('DIR_STORAGE',  str_replace('\\','/',__DIR__ ). '/storage/');
define('DIR_LANGUAGE', DIR_APPLICATION . 'language/');
define('DIR_TEMPLATE', DIR_APPLICATION . 'view/theme/');
define('DIR_CONFIG', DIR_SYSTEM . 'config/');
define('DIR_CACHE', DIR_STORAGE . 'cache/');
define('DIR_DOWNLOAD', DIR_STORAGE . 'download/');
define('DIR_LOGS', DIR_STORAGE . 'logs/');
define('DIR_MODIFICATION', DIR_STORAGE . 'modification/');
define('DIR_SESSION', DIR_STORAGE . 'session/');
define('DIR_UPLOAD', DIR_STORAGE . 'upload/');

// DB
// DB
// define('DB_DRIVER', 'mysqli');
// define('DB_HOSTNAME', 'mysql.ukrdomen.com');
// define('DB_USERNAME', 'uh1090933_root');
// define('DB_PASSWORD', 'yWO2u0yK4');
// define('DB_DATABASE', 'uh1090933_molineDb');
// define('DB_PORT', '3306');
// define('DB_PREFIX', 'oc_');

define('DB_DRIVER', 'mysqli');
define('DB_HOSTNAME', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_DATABASE', 'moline_db');
define('DB_PORT', '3306');
define('DB_PREFIX', 'oc_');
<?php
//HTTP
// define('HTTP_SERVER', 'http://moline.com.ua/admin/');
define('HTTP_SERVER', 'http://localhost/admin/');
// define('HTTP_CATALOG', 'http://moline.com.ua/');
define('HTTP_CATALOG', 'http://localhost/');

// HTTPS
// define('HTTPS_SERVER', 'http://moline.com.ua/admin/');
define('HTTPS_SERVER', 'http://localhost/admin/');
// define('HTTPS_CATALOG', 'http://moline.com.ua/');
define('HTTPS_CATALOG', 'http:/localhost/');

// oone('HTTPS_CATALOG', 'http://localhost/');

// DIR
define('DIR_APPLICATION', str_replace('\\','/',__DIR__ ). '/');
define('DIR_CATALOG',  str_replace('admin','catalog/',str_replace('\\','/',__DIR__ )));
define('DIR_SYSTEM',  str_replace('admin','system/',str_replace('\\','/',__DIR__ )));
define('DIR_IMAGE',  str_replace('admin','image/',str_replace('\\','/',__DIR__ )));
define('DIR_STORAGE',  str_replace('admin','storage/',str_replace('\\','/',__DIR__ )));
// define('DIR_APPLICATION', 'J:/xampp/htdocs/admin/');
// define('DIR_SYSTEM', 'J:/xampp/htdocs/system/');
// define('DIR_IMAGE', 'J:/xampp/htdocs/image/');
// define('DIR_STORAGE', 'J:/xampp/htdocs/storage/');
// define('DIR_CATALOG', 'J:/xampp/htdocs/catalog/');

define('DIR_LANGUAGE', DIR_APPLICATION . 'language/');
define('DIR_TEMPLATE', DIR_APPLICATION . 'view/template/');
define('DIR_CONFIG', DIR_SYSTEM . 'config/');
define('DIR_CACHE', DIR_STORAGE . 'cache/');
define('DIR_DOWNLOAD', DIR_STORAGE . 'download/');
define('DIR_LOGS', DIR_STORAGE . 'logs/');
define('DIR_MODIFICATION', DIR_STORAGE . 'modification/');
define('DIR_SESSION', DIR_STORAGE . 'session/');
define('DIR_UPLOAD', DIR_STORAGE . 'upload/');

//--DB--//
// test
// define('DB_DRIVER', 'mysqli');
// define('DB_HOSTNAME', 'mysql.ukrdomen.com');
// define('DB_USERNAME', 'uh1090933_root');
// define('DB_PASSWORD', 'yWO2u0yK4');
// define('DB_DATABASE', 'uh1090933_molineDb');
// define('DB_PORT', '3306');
// define('DB_PREFIX', 'oc_');
//live
define('DB_DRIVER', 'mysqli');
define('DB_HOSTNAME', 'mysql.ukrdomen.com');
define('DB_USERNAME', 'uh1117916_root');
define('DB_PASSWORD', 'yWO2u0yK4');
define('DB_DATABASE', 'uh1117916_molineDb');
define('DB_PORT', '3306');
define('DB_PREFIX', 'oc_');
//local
// define('DB_DRIVER', 'mysqli');
// define('DB_HOSTNAME', 'localhost');
// define('DB_USERNAME', 'root');
// define('DB_PASSWORD', '');
// define('DB_DATABASE', 'moline_db');
// define('DB_PORT', '3306');
// define('DB_PREFIX', 'oc_');

// OpenCart API
define('OPENCART_SERVER', 'https://www.opencart.com/');

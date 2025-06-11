<?php

use ModPath\View\View;

# Timezone Settings
date_default_timezone_set("America/Sao_Paulo");
setlocale(LC_ALL, 'pt_BR');

# Dotenv
try {
    $dotenv = Dotenv\Dotenv::createImmutable(ROOT);
    $dotenv->load();
} catch (\Exception) {
    echo '.env not found';
    exit;
}

# Session
session_set_cookie_params([
    'lifetime' => 0,
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
]);
session_start();
session_regenerate_id(true);

# Database
define('DATABASE_SERVER', $_ENV['DATABASE_SERVER']);
define('DATABASE_TYPE', $_ENV['DATABASE_TYPE']);
define('DATABASE_NAME', $_ENV['DATABASE_NAME']);
define('DATABASE_USER', $_ENV['DATABASE_USER']);
define('DATABASE_PASSWORD', $_ENV['DATABASE_PASSWORD']);
define('DATABASE_PORT', $_ENV['DATABASE_PORT']);

# JWT Secret
define('SECRET', $_ENV['SECRET']);

# Client SPA
$_SERVER['SPA'] = [
    "active" => true,
    "dispatch" => function() {
        View::render('Client/components/layout/index');
        View::render('../public/dist/templates');
    }
];
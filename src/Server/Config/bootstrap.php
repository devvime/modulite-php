<?php

define(
    'ROOT',
    dirname(
        dirname(
            dirname(__DIR__)
        )
    )
);

require_once ROOT . '/vendor/autoload.php';
require_once ROOT . '/src/Server/Config/config.php';
require_once ROOT . '/src/main.php';

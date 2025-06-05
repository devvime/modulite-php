<?php

use ModPath\Router\Router;
use Modulite\Modules\PageNotFound\PageNotFoundController;

$app = new Router();

$app->registerRoutes([
    PageNotFoundController::class
]);

$app->dispatch();
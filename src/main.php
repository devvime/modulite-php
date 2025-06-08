<?php

use ModPath\Router\Router;
use Modulite\Server\Modules\System\Controller\SystemController;

$app = new Router();

$app->registerRoutes([
    SystemController::class
]);

$app->dispatch();
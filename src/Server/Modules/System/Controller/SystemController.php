<?php

namespace Modulite\Server\Modules\System\Controller;

use ModPath\Attribute\Route;
use Modulite\Server\Modules\System\Service\SystemService;

class SystemController
{
    #[Route(path: '', method: 'GET')]
    public function homePage()
    {
        SystemService::homePage();
    }

    #[Route(path: '/404', method: 'GET')]
    public function pageNotFound()
    {
        SystemService::pageNotFound();
    }
}
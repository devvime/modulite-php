<?php

namespace Modulite\Modules\System\Controller;

use ModPath\Attribute\Route;
use Modulite\Modules\System\Service\SystemService;

class SystemController
{
    #[Route(path: '/404')]
    public function pageNotFound()
    {
        SystemService::pageNotFound();
    }
}
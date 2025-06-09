<?php

namespace Modulite\Server\Modules\System\Controller;

use ModPath\Attribute\Route;
use Modulite\Server\Modules\System\Service\SystemService;

class SystemController
{
    #[Route(path: '/404', method: 'GET')]
    public function endPointNotFound($request, $response)
    {
        SystemService::endPointNotFound($request, $response);
    }
}
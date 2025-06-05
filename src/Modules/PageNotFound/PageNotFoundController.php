<?php

namespace Modulite\Modules\PageNotFound;

use ModPath\Attribute\Route;

class PageNotFoundController
{
    #[Route(path: '/404')]
    public function view()
    {
        echo '404: Page Not Found.';
    }
}
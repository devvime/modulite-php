<?php

namespace Modulite\Server\Modules\System\Service;

class SystemService
{
    public static function homePage()
    {
        echo 'Hello World!';
    }

    public static function pageNotFound()
    {
        echo '404: Page not found.';
    }
}
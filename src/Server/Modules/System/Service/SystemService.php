<?php

namespace Modulite\Server\Modules\System\Service;

class SystemService
{
    public static function endPointNotFound($request, $response)
    {
        $response->status(404);
        $response->json([
            "status" => 404,
            "message" => "End point not found"
        ]);
    }
}

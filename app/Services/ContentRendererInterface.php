<?php


namespace App\Services;


interface ContentRendererInterface
{
    public function renderBody(string $original): string;
}

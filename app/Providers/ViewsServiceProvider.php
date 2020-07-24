<?php


namespace App\Providers;




use App\Views\Composer\AuthComposer;
use Illuminate\Contracts\View\Factory;
use Illuminate\Support\ServiceProvider;

class ViewsServiceProvider extends ServiceProvider
{
    /**
     * @var Factory
     */
    private $views;

    /**
     * @param Factory $viewFactory
     */
    public function boot(): void
    {
        $this->views = $this->app->make(Factory::class);

        $this->compose('*', AuthComposer::class);
    }

    /**
     * @param array|string $views
     * @param string $viewComposer
     */
    private function compose($views, string $viewComposer): void
    {
        $this->app->singleton($viewComposer);

        $this->views->composer($views, $viewComposer);
    }
}

<?php

namespace App\Providers;

use Illuminate\Config\Repository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function register()
    {
        $this->loadLocalProviders($this->app->make(Repository::class));
        $this->loadProductionProviders($this->app->make(Repository::class));
    }

    /**
     * @param Repository $repository
     */
    private function loadLocalProviders(Repository $repository): void
    {
        if ($this->app->isLocal()) {
            $providers = (array) $repository->get('app.local_providers', []);

            foreach ($providers as $provider) {
                $this->app->register($provider);
            }
        }
    }

    /**
     * @param Repository $repository
     */
    private function loadProductionProviders(Repository $repository): void
    {
        if (! $this->app->isLocal()) {
            $providers = (array) $repository->get('app.production_providers', []);

            foreach ($providers as $provider) {
                $this->app->register($provider);
            }
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

}

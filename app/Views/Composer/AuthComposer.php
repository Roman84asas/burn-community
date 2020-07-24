<?php



namespace App\Views\Composer;

use Illuminate\Contracts\View\View;
use Illuminate\Contracts\Auth\Authenticatable;

/**
 * Class AuthComposer.
 */
class AuthComposer
{
    /**
     * @var Authenticatable|null
     */
    private $auth;

    /**
     * AuthComposer constructor.
     *
     * @param Authenticatable|null $auth
     */
    public function __construct(Authenticatable $auth = null)
    {
        $this->auth = $auth;
    }

    /**
     * @param View $view
     */
    public function compose(View $view): void
    {
        $view->with('auth', $this->auth);
    }
}

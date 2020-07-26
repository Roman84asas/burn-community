<?php
declare(strict_types=1);

namespace App\Http\Controllers\Auth;


//use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\JWTGuard;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    use ThrottlesLogins;
    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request): Response
    {
        $this->validateLogin($request);

        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            $this->sendLockoutResponse($request);
        }

        if ($token = $this->attemptLogin($request)) {
            return $this->sendLoginResponse($request, $token);
        }

        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    /**
     * @return Response
     */
    public function refresh(): Response
    {
        return response()->json([
            'success' => true,
            'data'    => [
                'token' => $this->guard()->refresh(),
            ],
        ]);
    }

    /**
     * @param Request $request
     */
    protected function validateLogin(Request $request): void
    {
        $this->validate($request, [
            $this->username() => 'required|email|string',
            'password'        => 'required|string',
        ]);
    }

    /**
     * @param Request $request
     *
     * @return string|bool
     */
    protected function attemptLogin(Request $request)
    {
        return auth()->attempt(
            $this->credentials($request)
        );
    }

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    protected function credentials(Request $request): array
    {
        return $request->only($this->username(), 'password');
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param string                   $token
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function sendLoginResponse(Request $request, string $token): Response
    {
        $this->clearLoginAttempts($request);

        /** @var \App\Models\User $user */
        $user = $this->guard()->user();

        return $this->authenticated($request, $user, $token);
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User         $user
     * @param string                   $token
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function authenticated(Request $request, User $user, string $token): Response
    {
        return response()->json([
            'success' => true,
            'data'    => array_merge([
                'token' => $token,
            ], $user->attributesToArray()),
        ]);
    }

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @throws \Illuminate\Validation\ValidationException
     *
     * @return null|\Symfony\Component\HttpFoundation\Response
     */
    protected function sendFailedLoginResponse(Request $request): ?Response
    {
        throw ValidationException::withMessages([
            $this->username() => [trans('auth.failed')],
        ]);
    }

    /**
     * @return string
     */
    public function username(): string
    {
        return 'email';
    }

    /**
     * @param \Illuminate\Http\Request $request
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function logout(Request $request): Response
    {
        $this->guard()->logout();

        return response()->json([
            'status' => 'OK',
        ]);
    }

    /**
     * @return \Illuminate\Contracts\Auth\Guard|\Illuminate\Contracts\Auth\StatefulGuard|JWTGuard
     */
    protected function guard()
    {
        return auth()->guard();
    }
}

<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

/**
 * Class AuthenticateAndIfNeedRefreshToken.
 */
class AuthenticateAndIfNeedRefreshToken extends BaseMiddleware
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $this->checkForToken($request);

        return $this->authenticateAndMaybeRefresh($request, $next);
    }

    /**
     * @param Request $request
     * @param Closure $next
     * @param string|null $token
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\Response|mixed
     */
    public function authenticateAndMaybeRefresh(Request $request, Closure $next, ?string $token = null)
    {
        try {
            $token ? $this->auth->setToken($token) : $this->auth->parseToken();

            if (!$this->auth->authenticate()) {
                throw new JWTException('User not found.');
            }
        } catch (TokenExpiredException $e) {
            $refreshed = $this->auth->refresh();

            return $this->authenticateAndMaybeRefresh($request, $next, $refreshed);
        } catch (JWTException $e) {
            throw new UnauthorizedHttpException('jwt-auth', $e->getMessage(), $e, $e->getCode());
        }

        $response = $next($request);

        return $token === null
            ? $response
            : $this->setAuthenticationHeader($response, $token);
    }
}

<?php

namespace App\Providers;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;

class RemoteUserProvider implements UserProvider
{
    public function retrieveById($identifier) {
        // Реализация поиска пользователя по ID
    }

    public function retrieveByToken($identifier, $token) {
        // Реализация поиска пользователя по токену
    }

    public function updateRememberToken(Authenticatable $user, $token) {
        // Обновление remember_token пользователя
    }

    public function retrieveByCredentials(array $credentials) {
        if (!isset($credentials['username']) || !isset($credentials['password'])) {
            throw new \InvalidArgumentException("Username and password are required.");
        }

        $response = Http::withOptions([
            'verify' => false  // Disable SSL certificate verification
        ])->post('https://crm.mirax.md/restapi/auth.login', [
            'username' => $credentials['username'],
            'password' => $credentials['password'],
        ]);
        if ($response->successful() && isset($response['userID']) && $response['userID'] > 0) {
            // Assuming the response structure is correct and the keys exist
            return new \App\Models\User([
                'email' => $response['user']['email'],
                'name' => $response['user']['name'],
                'last_name' => $response['user']['last_name'],
                'hash' => $response['hash'],
            ]);
        }

        return null;
    }


    public function validateCredentials(Authenticatable $user, array $credentials) {
        // Проверка логина и пароля, но в нашем случае не требуется
        return true;
    }
}

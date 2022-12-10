<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\StoragePathWork;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //register
    public function signUp(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string'
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);
    }
    /**
     * Inicio de sesión y creación de token
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);

        $user = $request->user();

        if (!$user->active) {
            return response()->json([
                'message' => 'Inactive user'
            ], 403);
        }

        return response()->json([
            'access_token' =>  'Bearer ' . $user->createToken("API TOKEN")->plainTextToken
        ]);
    }

    /**
     * Cierre de sesión (anular el token)
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    /**
     * Obtener el objeto User como json
     */
    public function user(Request $request)
    {
        $myServiceSPW = new StoragePathWork("users");

        $user = $request->user();

        $roles = [];

        foreach ($user->roles as $role) {
            $roles[] = $role->display_name;
        }

        $photo = $myServiceSPW->getFile($user->userProfile->photo, '/users') ? urldecode($myServiceSPW->getFile($user->userProfile->photo, '/users')) : null;

        if (App::environment('local') && $photo) {
            $photo = "http://127.0.0.1:8887/" . $user->userProfile->photo;
        }

        return response()->json(
            [
                "id" => $user->id,
                "full_name" => $user->userProfile->fullName,
                "email" => $user->email,
                "email_verified_at" => $user->email_verified_at,
                "active" => $user->active,
                "role" => implode(", ",  $roles),
                "photo" => $photo,
                "created_at" => Carbon::parse($user->created_at)->format("d/m/Y"),
                // "updated_at" => "2022-12-04T07:33:11.000000Z"
            ]

        );
    }
}

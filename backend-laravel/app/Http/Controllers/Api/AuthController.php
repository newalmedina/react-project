<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ForgetPasswordMail;
use App\Models\Role;
use App\Models\User;
use App\Models\UserProfile;
use App\Services\StoragePathWork;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    //register
    public function signUp(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|confirmed|min:6|string'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }

        try {
            //creando user
            $user = new User();
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->active = 1;
            $user->email_verified_at = Carbon::now();
            $user->save();

            //creando profile
            $userProfile = new UserProfile();

            $userProfile->first_name = $request->first_name;
            $userProfile->last_name = $request->last_name;
            $userProfile->gender = 'male';
            $userProfile->user_lang = 'es';

            $user->userProfile()->save($userProfile);

            $credentials = request(['email', 'password']);

            if (!Auth::attempt($credentials))
                return response()->json([
                    'message' => 'Unauthorized'
                ], 401);

            $user = $request->user();

            $roles = Role::where('name', '=', 'usuario-front')->first();
            $user->roles()->attach($roles->id);

            return response()->json([
                'access_token' =>  'Bearer ' . $user->createToken("API TOKEN")->plainTextToken
            ]);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
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


        $photo = null;
        if (!empty($user->userProfile->photo)) {
            $photo = $myServiceSPW->getFile($user->userProfile->photo, '/users') ? urldecode($myServiceSPW->getFile($user->userProfile->photo, '/users')) : null;
            if (App::environment('local')) {
                $photo = "http://127.0.0.1:8887/users/" . $user->userProfile->photo;
            }
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
                "permissions" => $user->all_permissions_array,
                "created_at" => Carbon::parse($user->created_at)->format("d/m/Y"),
                // "updated_at" => "2022-12-04T07:33:11.000000Z"
            ]

        );
    }


    //forgetPassword
    public function forgetPassword(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }
        DB::beginTransaction();
        try {

            $user = User::where("email", $request->email)->first();
            if (empty($user)) {
                return response()->json([
                    'message' => 'Este correo no existe en nuestros registros'
                ], 404);
            }

            if (empty($user->forget_password_token)) {
                $user->forget_password_token = Str::uuid()->toString();
                $user->save();
            }

            Mail::to($user->email)

                ->send(new ForgetPasswordMail($user));

            DB::commit();
            return response()->json([
                'message' =>  'Se ha enviado un mail al correo'
            ]);
        } catch (Exception  $ex) {
            DB::rollBack();
            return $ex->getCode();
        }
    }

    public function getForgetPasswordToken($user_id, $token)
    {
        $user = User::where("id", $user_id)
            ->where("forget_password_token", $token)
            ->first();

        if (empty($user)) {
            return response()->json([
                'message' => 'Este correo no existe en nuestros registros'
            ], 404);
        }

        return response()->json(
            [
                "token" => $user->forget_password_token,
            ]
        );
    }

    //restorePassword
    public function restorePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'forget_password_token' => 'required|string',
            'password' => 'required|confirmed|min:6|string'
        ]);
        $user = User::where("id", $request->user_id)
            ->where("forget_password_token", $request->token)
            ->first();

        if (empty($user)) {
            return response()->json([
                'message' => 'Este correo no existe en nuestros registros'
            ], 404);
        }

        $user->password = Hash::make($request->password);
        $user->forget_password_token = null;
        $user->save();

        return response()->json([
            'message' => 'Contraseña Actualizada Correctamente'
        ], 200);
    }
}

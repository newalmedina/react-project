<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\UserProfile;
use App\Services\StoragePathWork;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserProfileController extends Controller
{
    public function getUser(Request $request)
    {
        $myServiceSPW = new StoragePathWork("users");

        $user = $request->user();
        if (empty($user)) {
            return response()->json([
                'message' => 'Este correo no existe en nuestros registros'
            ], 404);
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
                "first_name" => $user->userProfile->first_name,
                "last_name" => $user->userProfile->last_name,
                "email" => $user->email,
                "photo" => $photo,
                // "updated_at" => "2022-12-04T07:33:11.000000Z"
            ]
        );
    }

    public function update(Request $request, $user_id)
    {

        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users,email,' . $user_id,
            'password' => 'nullable|confirmed'
        ]);
        // return $request;
        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }
        try {
            DB::beginTransaction();
            //creando user
            $user = User::find($user_id);
            if (empty($user)) {
                return response()->json([
                    'message' => 'no existe usuario'
                ], 404);
            }

            $user->email = $request->email;
            if (!empty($request->password)) {
                $user->password = Hash::make($request->password);
            }
            $myServiceSPW = new StoragePathWork("users");

            //creando profile
            $user->userProfile->first_name = $request->first_name;
            $user->userProfile->last_name = $request->last_name;
            // return $request->photo;
            if (!empty($request->photo)) {
                if (!empty($user->userProfile->photo))
                    $myServiceSPW->deleteFile($user->userProfile->photo, '');

                $filename = $myServiceSPW->saveFile($request->photo, '');
                $user->userProfile->photo = $filename;
            }
            $user->push();

            DB::commit();

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getMessage();
            DB::rollBack();
            return $ex->getCode();
        }
    }
}

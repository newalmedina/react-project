<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserProfile;
use App\Services\StoragePathWork;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserControlller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        $data = [];
        foreach ($users as $user) {
            $data[] = [
                "id" => $user->id,
                "full_name" => $user->userProfile->fullName,
                "email" => $user->email,
                "active" => $user->active,
            ];
        }
        return $data;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
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

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        if (empty($user)) {
            return response()->json([
                'message' => 'Este correo no existe en nuestros registros'
            ], 404);
        }

        return response()->json(
            [
                "id" => $user->id,
                "first_name" => $user->userProfile->first_name,
                "last_name" => $user->userProfile->last_name,
                "email" => $user->email,

                // "updated_at" => "2022-12-04T07:33:11.000000Z"
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|string|email|unique:users,email,' . $id,
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
            $user = User::find($id);
            if (empty($user)) {
                return response()->json([
                    'message' => 'no existe usuario'
                ], 404);
            }

            $user->email = $request->email;
            if (!empty($request->password)) {
                $user->password = Hash::make($request->password);
            }

            //creando profile
            $user->userProfile->first_name = $request->first_name;
            $user->userProfile->last_name = $request->last_name;
            // return $request->photo;

            $user->push();

            DB::commit();

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }

    public function changeState($id)
    {
        try {
            //creando user
            $user = User::find($id);
            if (empty($user)) {
                return response()->json([
                    'message' => 'no existe usuario'
                ], 404);
            }

            $user->active = !$user->active;
            $user->save();

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::find($id);

        if (empty($user)) {
            return response()->json([
                'message' => 'no existe usuario'
            ], 404);
        }

        try {
            $myServiceSPW = new StoragePathWork("users");
            $file = $user->userProfile->photo;

            $user->delete();

            if (!empty($file))
                $myServiceSPW->deleteFile($file, '');


            return response()->json([
                'message' => 'Registro eliminado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }
}

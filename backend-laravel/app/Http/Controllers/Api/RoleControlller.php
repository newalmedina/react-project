<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\UserProfile;
use App\Services\StoragePathWork;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RoleControlller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Role::all();
    }

    public function getActives()
    {
        return Role::active()->get();
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
            'active' => 'required|string',
            'display_name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }

        try {
            $role = new Role();
            $role->name = Str::slug($request->display_name);
            $role->display_name = $request->display_name;
            $role->description = $request->description;
            $role->save();
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
        $role = Role::find($id);
        if (empty($role)) {
            return response()->json([
                'message' => 'no existe usuario'
            ], 404);
        }
        return $role;
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
            'active' => 'required|string',
            'display_name' => 'required|string',
        ]);
        // return $request;
        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }
        try {


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
            $role = Role::find($id);
            if (empty($role)) {
                return response()->json([
                    'message' => 'no existe usuario'
                ], 404);
            }

            $role->active = !$role->active;
            $role->save();

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\PermissionsTree;
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
            $role->active = $request->active;
            $role->display_name = $request->display_name;
            $role->description = $request->description;
            $role->can_delete = 1;
            $role->save();

            return response()->json([
                'message' => 'Registro guardado correctamente'
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
                'message' => 'no existe rol'
            ], 404);
        }

        $selected_permission = [];
        $a_arrayPermisos = $role->getArrayPermissions();

        foreach ($a_arrayPermisos as $a_arrayPermiso) {
            $selected_permission[] = $a_arrayPermiso;
        }

        return response()->json(
            [
                "id" => $role->id,
                "display_name" => $role->display_name,
                "description" => $role->description,
                "active" => $role->active,
                "selected_permission" => $selected_permission

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
            $role =  Role::find($id);
            if (empty($role)) {
                return response()->json([
                    'message' => 'no existe rol'
                ], 404);
            }

            $role->active = $request->active;
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

    public function changeState($id)
    {
        try {
            //creando user
            $role = Role::find($id);
            if (empty($role)) {
                return response()->json([
                    'message' => 'no existe rol'
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

    public function destroy($id)
    {
        $role = Role::find($id);

        if (empty($role)) {
            return response()->json([
                'message' => 'no existe rol'
            ], 404);
        }
        if (!$role->can_delete) {
            return response()->json([
                'message' => 'Rol no se puede eliminar'
            ], 402);
        }

        try {

            $role->delete();

            return response()->json([
                'message' => 'Registro eliminado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }

    public function getPermissions($id)
    {
        $role = Role::find($id);
        if (empty($role)) {
            return response()->json([
                'message' => 'no existe rol'
            ], 404);
        }

        $permissionsTrees = PermissionsTree::withDepth()->with('permission')->get()->sortBy('_lft');

        $permissionList = [];

        foreach ($permissionsTrees as $permissionsTree) {

            $permissionList[] = [
                "id" => $permissionsTree->id,
                "parent_id" => $permissionsTree->parent_id,
                "permissions_id" => $permissionsTree->permissions_id,
                "permission_display_name" => !empty($permissionsTree->permission) ? $permissionsTree->permission->display_name : null,
            ];
        }

        return $permissionList;
    }
    public function updatePermission(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            "permission_ids"    => "required|array",
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
            $role = Role::find($id);

            if (empty($role)) {
                return response()->json([
                    'message' => 'no existe role'
                ], 404);
            }


            $role->syncPermissions($request->permission_ids);


            DB::commit();

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\PermissionsTree;
use App\Models\Category;
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

class CategoryControlller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::all();
    }

    public function getActives()
    {
        return Category::active()->get();
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
            'name' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }

        try {
            $category = new Category();
            $category->name = Str::slug($request->name);
            $category->active = $request->active;
            $category->description = $request->description;
            $category->save();

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
        $category = Category::find($id);
        if (empty($category)) {
            return response()->json([
                'message' => 'no existe categoría'
            ], 404);
        }

        return $category;
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
            'name' => 'required|string',
        ]);
        // return $request;
        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }
        try {
            $category =  Category::find($id);
            if (empty($category)) {
                return response()->json([
                    'message' => 'no existe categoría'
                ], 404);
            }

            $category->active = $request->active;
            $category->name = $request->name;
            $category->description = $request->description;
            $category->save();

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
            $category = Category::find($id);
            if (empty($category)) {
                return response()->json([
                    'message' => 'no existe categoría'
                ], 404);
            }

            $category->active = !$category->active;
            $category->save();

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }

    public function destroy($id)
    {
        $category = Category::find($id);

        if (empty($category)) {
            return response()->json([
                'message' => 'no existe categoría'
            ], 404);
        }


        try {

            $category->delete();

            return response()->json([
                'message' => 'Registro eliminado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }
}

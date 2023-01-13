<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductControlller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [];
        $products = Product::all();

        foreach ($products as $product) {
            $data[] = [
                "id" => $product->id,
                "name" => $product->name,
                "active" => $product->active,
                "description" => $product->description,
                "category" => $product->category->name,
            ];
        }
        return $data;
    }

    public function getActives()
    {
        return Product::active()->get();
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
            'price' => 'required',
            'category_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }

        try {

            $product = new Product();
            $product->name = $request->name;
            $product->active = $request->active;
            $product->description = $request->description;
            $product->category_id = $request->category_id;
            $product->price = $request->price;
            $product->save();
            return response()->json([
                'message' => 'Registro guardado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            dd($ex);
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
        $product = Product::find($id);
        if (empty($product)) {
            return response()->json([
                'message' => 'no existe producto'
            ], 404);
        }

        return $product;
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
            'price' => 'required',
            'category_id' => 'required'
        ]);
        // return $request;
        if ($validator->fails()) {
            return response()->json([
                'message' => 'validation error'
            ], 422);
        }
        try {
            $product =  Product::find($id);
            if (empty($product)) {
                return response()->json([
                    'message' => 'no existe producto'
                ], 404);
            }
            $product->name = $request->name;
            $product->active = $request->active;
            $product->description = $request->description;
            $product->category_id = $request->category_id;
            $product->price = $request->price;
            $product->save();

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
            $product = Product::find($id);
            if (empty($product)) {
                return response()->json([
                    'message' => 'no existe producto'
                ], 404);
            }

            $product->active = !$product->active;
            $product->save();

            return response()->json([
                'message' => 'Registro actualizado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        if (empty($product)) {
            return response()->json([
                'message' => 'no existe producto'
            ], 404);
        }


        try {

            $product->delete();

            return response()->json([
                'message' => 'Registro eliminado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use App\Services\StoragePathWork;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
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
        $myServiceSPW = new StoragePathWork("products");
        $data = [];
        $products = Product::all();

        foreach ($products as $product) {
            $imageList = [];
            foreach ($product->images as $image) {
                $file = $myServiceSPW->getFile($image->name, '/products') ? urldecode($myServiceSPW->getFile($image->name, '/products')) : null;
                if (App::environment('local')) {
                    $file = "http://127.0.0.1:8887/products/" . $image->name;
                }
                $imageList[] = [
                    "id" => $image->id,
                    "name" => $file
                ];
            }
            $data[] = [
                "id" => $product->id,
                "name" => $product->name,
                "active" => $product->active,
                "description" => $product->description,
                "category" => $product->category->name,
                "images" =>  $imageList,
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
            return $product;
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
        $myServiceSPW = new StoragePathWork("products");
        $data = [];

        $product = Product::find($id);
        if (empty($product)) {
            return response()->json([
                'message' => 'no existe producto'
            ], 404);
        }

        $imageList = [];
        foreach ($product->images as $image) {
            $file = $myServiceSPW->getFile($image->name, '/products') ? urldecode($myServiceSPW->getFile($image->name, '/products')) : null;
            if (App::environment('local')) {
                $file = "http://127.0.0.1:8887/products/" . $image->name;
            }
            $imageList[] = [
                "id" => $image->id,
                "name" => $file
            ];
        }
        return [
            "id" => $product->id,
            "name" => $product->name,
            "active" => $product->active,
            "description" => $product->description,
            "category" => $product->category->name,
            "images" =>  $imageList,
        ];
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
            $myServiceSPW = new StoragePathWork("products");
            foreach ($product->images as $image) {
                $myServiceSPW->deleteFile($image->name, '');
                $image->delete();
                # code...
            }

            $product->delete();

            return response()->json([
                'message' => 'Registro eliminado correctamente'
            ], 200);
        } catch (Exception  $ex) {
            return $ex->getCode();
        }
    }



    public function listImageProduct($id)
    {
        $myServiceSPW = new StoragePathWork("products");
        $product = Product::find($id);
        $imageList = [];
        foreach ($product->images as $image) {
            $file = $myServiceSPW->getFile($image->name, '/products') ? urldecode($myServiceSPW->getFile($image->name, '/products')) : null;
            if (App::environment('local')) {
                $file = "http://127.0.0.1:8887/products/" . $image->name;
            }
            $imageList[] = [
                "id" => $image->id,
                "name" => $file
            ];
        }
        return $imageList;
    }
    public function storeImage(Request $request, $product_id)
    {
        $myServiceSPW = new StoragePathWork("products");

        $file = $request->file('file');

        $filename = $myServiceSPW->saveFile($file, '');

        $newImage = new ProductImage();
        $newImage->name = $filename;
        $newImage->original_name = $file->getClientOriginalName();
        $newImage->mime = $file->getClientOriginalExtension();
        $newImage->product_id = $product_id;
        $newImage->save();

        return $newImage;
    }

    public function deleteImage($id)
    {
        $myServiceSPW = new StoragePathWork("products");
        $image = ProductImage::find($id);
        $myServiceSPW->deleteFile($image->name, '');
        return $image->delete();
    }
}

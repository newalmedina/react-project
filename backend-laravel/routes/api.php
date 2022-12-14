<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\API\RoleControlller;
use App\Http\Controllers\API\UserControlller;
use App\Http\Controllers\Api\UserProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::group([
    'prefix' => 'auth'
], function () {
    Route::get('get-forget-password-token/{user_id}/{token}', [AuthController::class, 'getForgetPasswordToken']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'signUp']);
    Route::post('forget-password', [AuthController::class, 'forgetPassword']);
    Route::post('restore-password', [AuthController::class, 'restorePassword']);

    Route::group([
        'middleware' => 'auth:sanctum'
    ], function () {

        Route::get('user', [AuthController::class, 'user']);
        Route::get('logout', [AuthController::class, 'logout']);
    });
});
Route::group([
    'middleware' => 'auth:sanctum'
], function () {
    Route::get('get-user-profile', [UserProfileController::class, 'getUser']);
    Route::patch('user-profile-update/{id}', [UserProfileController::class, 'update']);

    Route::get('users/change-state/{id}', [UserControlller::class, 'changeState']);
    Route::patch('users/update-role/{id}', [UserControlller::class, 'updateRole']);
    Route::apiResource('users', UserControlller::class);

    Route::get('roles/get-actives', [RoleControlller::class, 'getActives']);
    Route::get('roles/change-state/{id}', [RoleControlller::class, 'changeState']);
    Route::apiResource('roles', RoleControlller::class);
});

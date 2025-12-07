<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Controller Import
use App\Http\Controllers\Api\ProductController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


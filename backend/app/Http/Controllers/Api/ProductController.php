<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Menampilkan daftar produk.
     */
    public function index()
    {
        // Data dummy (pengganti database)
        $products = [
            [
                'id' => 1,
                'name' => 'Laptop Super Canggih',
                'price' => 15000000
            ],
            [
                'id' => 2,
                'name' => 'Mouse Gaming',
                'price' => 500000
            ],
            [
                'id' => 3,
                'name' => 'Keyboard Mekanikal',
                'price' => 1200000
            ]
        ];

        return response()->json($products);
    }
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductHighlights() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/products");
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data.slice(0, 3));
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Featured Products</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Popular Items
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Check out some of our most popular products that customers love.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                                        {product.name.charAt(0)}
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link href={`/products/${product.id}`}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                </div>
                                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/products"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium"
                    >
                        View All Products
                    </Link>
                </div>
            </div>
        </div>
    );
}

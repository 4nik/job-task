"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function ProductDetail() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${params.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                } else if (response.status === 404) {
                    setError("Product not found");
                } else {
                    setError("Failed to fetch product");
                }
            } catch (error) {
                console.error("Failed to fetch product:", error);
                setError("Failed to fetch product");
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchProduct();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">{error}</h1>
                        <Link
                            href="/products"
                            className="text-blue-600 hover:text-blue-500"
                        >
                            ← Back to Products
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!product) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <Link
                            href="/products"
                            className="text-blue-600 hover:text-blue-500 flex items-center"
                        >
                            ← Back to Products
                        </Link>
                    </div>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                        {/* Image */}
                        <div className="w-full">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-6xl font-bold">
                                    {product.name.charAt(0)}
                                </div>
                            </div>
                        </div>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                {product.name}
                            </h1>

                            <div className="mt-3">
                                <p className="text-3xl text-gray-900">${product.price}</p>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <div className="text-base text-gray-700 space-y-6">
                                    <p>{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center">
                                    <h3 className="text-sm text-gray-900 font-medium">Category:</h3>
                                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {product.category}
                                    </span>
                                </div>

                                <div className="flex items-center mt-4">
                                    <h3 className="text-sm text-gray-900 font-medium">Stock:</h3>
                                    <span className="ml-2 text-sm text-gray-700">
                                        {product.stock} units available
                                    </span>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button
                                    type="button"
                                    className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    onClick={() => {
                                        // In a real app, this might add to cart or show a purchase modal
                                        alert("Purchase functionality would be implemented here!");
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

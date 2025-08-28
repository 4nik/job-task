import { NextResponse } from "next/server";
import { getProducts, addProduct } from "../../../lib/mockData";

// GET /api/products - Get all products
export async function GET() {
  try {
    const products = getProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST /api/products - Add a new product
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, category, stock } = body;

    if (!name || !description || !price) {
      return NextResponse.json(
        { error: "Name, description, and price are required" },
        { status: 400 }
      );
    }

    const newProduct = addProduct({
      name,
      description,
      price: parseFloat(price),
      category: category || "General",
      stock: parseInt(stock) || 0,
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 }
    );
  }
}

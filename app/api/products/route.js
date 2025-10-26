import { NextResponse } from "next/server";
import { ProductModel } from "../../../models/ProductModel";
import { dbConnect } from "../../database/dbConnect";

export async function POST(request) {
    try {
        await dbConnect();
        const { name, description, price, category, brand, stock, isTrending, images } = await request.json();
        
        const newProduct = {
            name,
            description,
            price,
            category,
            brand,
            stock,
            isTrending,
            images
        }
    
        if (!name || !description || !price || !category || !brand || !stock) {
            return new Response(JSON.stringify({ message: "All fields are required." }), { status: 400 });
        }
        
        const product = await ProductModel.create(newProduct);
        return NextResponse.json({ message: "Product created successfully", product }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();
        const products = await ProductModel.find({});
        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
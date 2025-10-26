import { NextResponse } from "next/server";
import { ProductModel } from "../../../../models/ProductModel";
import { dbConnect } from "../../../database/dbConnect";

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        
        const product = await ProductModel.findById(id).lean();

        if (!product) {
            return NextResponse.json({ error: "Product not found." }, { status: 404 });
        }

        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch product." }), { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        const product = await ProductModel.findById(id).lean()

        if(!product){
            return NextResponse.json({ error: "Product not found." }, { status: 404 });
        }

        await ProductModel.deleteOne({_id: id});

        return NextResponse.json({message: "Product deleted"})
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete product." }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");
        const data = await request.json();

        const existingProduct = await ProductModel.findById(id).lean();

        if (!existingProduct) {
            return NextResponse.json({ error: "Product not found." }, { status: 404 });
        }

        await ProductModel.updateOne({ _id: id }, { $set: data });

        const updatedProduct = await ProductModel.findById(id).lean();

        return NextResponse.json({ message: "Product updated successfully.", product: updatedProduct }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update product." }, { status: 500 });
    }
}
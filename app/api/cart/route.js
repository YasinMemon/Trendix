import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "../../../helpers/getDataFromToken";
import { dbConnect } from "../../database/dbConnect";
import { ProductModel } from "../../../models/ProductModel";
import { CartModel } from "../../../models/CartModel";

export async function POST(request) {
    try {
        await dbConnect()
        const { userId } = await getDataFromToken(request)
        const { productId, quantity } = await request.json()

        const product = await ProductModel.findById(productId);

        if(!product) {
            return NextResponse.json({message: "Product Not Found"}, {status: 404})
        }

        let cart = await CartModel.findById(userId)

        if(!cart) {
            cart = new CartModel({userId, items: []})
        }

        const existingItem = cart.items.find((item) => item.productId.toString() === productId)

        if (existingItem){
            existingItem.quantity += quantity || 1
        } else {
            cart.items.push({
                productId,
                quantity: quantity || 1,
                price: product.price
            })
        }

        await cart.save();
        return NextResponse.json({ message: "Product added to cart", cart }, { status: 200 });
    } catch (error) {
       console.error("Add to cart error:", error);
       return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
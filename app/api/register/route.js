import { NextResponse } from "next/server";
import { dbConnect } from "../../database/dbConnect";
import { UserModel } from "../../../models/UserModel";

export async function POST(request) {
    await dbConnect();

    const {fullName, email, password} = await request.json();

    if (!fullName || !email || !password) {
        return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
        );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json(
            { message: "Invalid email format" },
            { status: 400 }
        );
    }

    if (password.length < 6) {
        return NextResponse.json(
            { message: "Password must be at least 6 characters long" },
            { status: 400 }
        );
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        return NextResponse.json(
            { message: "User already exists" },
            { status: 400 }
        );
    }

    const newUser = { fullName, email, password };
    await UserModel.create(newUser);

    return NextResponse.json({
        message: "User registered successfully",
        status: 201,
        data: newUser
    });
}
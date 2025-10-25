import { NextResponse } from "next/server";
import { UserModel } from "../../../models/UserModel";


export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ message: 'Email and password are required.' }), { status: 400 });
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
        }

        return NextResponse.json({ message: 'Login successful.', user: { id: user._id, fullName: user.fullName, email: user.email, role: user.role } }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
    }
}
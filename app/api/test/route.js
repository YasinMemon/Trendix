import { dbConnect } from "../../database/dbConnect";


export async function GET() {
    dbConnect();
    return new Response(JSON.stringify({ message: "API is working" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
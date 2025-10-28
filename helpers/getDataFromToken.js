import jwt from "jsonwebtoken";

export const  getDataFromToken = (request) => {
    const token = request.cookies.get("token")?.value || null;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId } = decoded;
    return { userId };
}
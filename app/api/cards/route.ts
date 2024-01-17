import connectMongoDB from "@/libs/mongodb";
import CardModel from "@/models/card";

export const dynamic = 'force-dynamic' // defaults to auto

export async function POST(request: Request) {
    const {title, content} = await request.json();
    await connectMongoDB();
    await CardModel.create({title, content});
    return Response.json({ content: 'ok' });
}

export async function GET(request: Request) {
    await connectMongoDB();
    const cards = await CardModel.find();
    return Response.json({ cards });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await CardModel.findByIdAndDelete(id);
    return Response.json({ message: "Cards deleted" });
}
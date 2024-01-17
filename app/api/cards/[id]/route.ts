import connectMongoDB from "@/libs/mongodb";
import CardModel from "@/models/card";


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    await connectMongoDB();
    const card = await CardModel.findOne({_id: id});
    return Response.json({ card: card });
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id;
    const {title, content} = await request.json();
    await connectMongoDB();
    await CardModel.findByIdAndUpdate(id, { title, content });
    return Response.json({ content: 'ok' });
}
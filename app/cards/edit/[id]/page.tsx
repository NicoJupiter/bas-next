import {CardType} from "@/type/type";
import CardForm from "@/src/components/cardForm/cardForm";

const getCard = async (id) => {

    const res = await fetch(`http://127.0.0.1:3000/api/cards/${id}`, {
        cache: "no-cache"
    });
    if (!res.ok) {
        throw new Error('Error cant get card');
    }
    return res.json()
}


export default async function editCardPage({
    params
}: {
    params: {id : string}
}) {
    const cardObj = await getCard(params.id);
    return (
        <div className="pt-5">
            <CardForm titleProps={cardObj.card.title} contentProps={cardObj.card.content} id={params.id} />
        </div>
    );
}
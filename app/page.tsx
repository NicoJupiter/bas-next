import Card from "@/src/components/card/card";
import {CardType, CardsType} from "@/type/type";

const getCards = async () => {

    const res = await fetch('http://127.0.0.1:3000/api/cards', {
        cache: "no-cache"
    });

    if (!res.ok) {
        throw new Error('Cant fetch data');

    }
    return res.json();
}

export default async function Home() {

    const {cards} : CardsType = await getCards();

    return (
      <>
          <div className="flex flex-col">
              {cards.map((card) => (
                  <Card key={card._id} card={card} />
              ))}
          </div>
      </>
  )
}

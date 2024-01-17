import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "@/src/components/removeBtn/removeBtn";
import {CardProps} from "@/type/type";

export default function Card({card} : CardProps) {

    return (
        <div className="p-4 border w-full border-slate-300 my-3 flex justify-between gap-5 items-start">
            <Link href={`/cards/${card._id}`}>
                <h2 className="font-bold text-2xl">{card.title}</h2>
            </Link>
            <div className="flex">
                <Link className="mr-2" href={`/cards/edit/${card._id}`}>
                    <HiPencilAlt size={24} />
                </Link>
                <RemoveBtn id={card._id} />
            </div>

        </div>
    )
}
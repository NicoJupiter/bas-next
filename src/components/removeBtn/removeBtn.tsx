"use client";
import { HiOutlineTrash } from "react-icons/hi";
import {useRouter} from "next/navigation";


export default function RemoveBtn(params) {
    const router = useRouter();
    const handleDelete = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/cards?id=${params.id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={handleDelete} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}



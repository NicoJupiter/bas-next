import Link from "next/link";


export default async function Header() {
    return (
        <div className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>
                BaS Next
            </Link>
            <Link className="bg-white p-2" href={"/cards/add"}>
                Add Card
            </Link>
        </div>
    );
}
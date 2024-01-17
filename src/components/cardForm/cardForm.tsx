'use client';

import {CardProps} from "@/type/type";
import {FormEvent, useState} from 'react';
import { useRouter } from 'next/navigation';

export default function CardForm({titleProps, contentProps, id }) {
    const [title, setTitle] = useState(titleProps ? titleProps : '');
    const [content, setContent] = useState(contentProps ? contentProps : '');
    const router = useRouter();

    const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !content) {
            console.log('missing param');
            return;
        }

        try {

            let resParams = {
                method: '',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title, content})
            }
            let res;
            if (id) {
                resParams.method = 'PATCH'
                res = await fetch(`http://localhost:3000/api/cards/${id}`, resParams);
            } else {
                resParams.method = 'POST'
                res = await fetch('http://localhost:3000/api/cards', resParams);
            }

            if (res.ok) {
                router.push('/');
                router.refresh();
            } else {
                console.log('Error');
            }
        } catch (e) {
            throw new Error(e.message);
        }

    }

    return (
        <form onSubmit={submitHandle} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Card Title"
                name="title"
            />

            <input
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className="border border-slate-500 px-8 py-2"
                type="text"
                placeholder="Card Content"
                name="content"
            />

            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
               Confirm
            </button>
        </form>
    );
}
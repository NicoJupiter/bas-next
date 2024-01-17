"use client";

export default function ErrorCardPage({
    error,
    reset
}: {
    error: Error,
    reset: () => void;
}) {
    return (
        <div>
            <h1>Error Something went wrong :( </h1>
        </div>
    )
}
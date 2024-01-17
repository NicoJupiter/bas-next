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
            <h1>Error card Id not found</h1>
            {error.message}
        </div>
    )
}
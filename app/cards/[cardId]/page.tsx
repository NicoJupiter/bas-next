
export default function CardPage({
    params
} : {
    params: {cardId : string}
}) {

    return (
        <div>
            <h1>Card page id : {params.cardId}</h1>
        </div>
    )
}
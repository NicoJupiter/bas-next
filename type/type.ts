
export interface CardType {
    _id: string,
    title : string,
    content : string
}

export interface CardsType {
    cards: CardType[]
}

export interface CardProps {
    card: CardType
}
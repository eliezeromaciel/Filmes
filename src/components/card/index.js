import {CardContainer, CardPoster} from "./styles"

export function Card ({poster, title, year}){
    return (
        <CardContainer>
            <CardPoster src={poster} alt="imagem"/>
            <span >{title}</span>
            <span >{year}</span>
        </CardContainer>
    )
}   
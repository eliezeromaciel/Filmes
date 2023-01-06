import {FooterStyled} from "./styles"
import { Botao } from "../Button"

export function Footer ({onClick, ...rest}) {
    return (
        <FooterStyled>
            <Botao onClick={onClick} {...rest} text="Anterior"/>
            <Botao onclick={onClick} text="Próxima"/>

        </FooterStyled>
    )
}
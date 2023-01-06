import {ButtonStyled} from "./styles.js"

export function Botao ({secondary,text,...rest}){
    return (
        <div>
            <ButtonStyled secondary={secondary} {...rest}>
                {text}
            </ButtonStyled>
        </div>
    )
}
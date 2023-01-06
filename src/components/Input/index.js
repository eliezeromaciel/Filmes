import {InputStyled} from "./syles"

export function Input ({...rest}){
    return (
    <div>
        <InputStyled {...rest}></InputStyled>
    </div>
    )
}
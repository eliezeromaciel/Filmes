import styled from "styled-components"

export const ButtonStyled = styled.button`
    padding: 8px;
    border-radius: 8px;
    width: 130px;
    background-color: ${({ secondary }) => secondary ? "orange" : "white"};
`

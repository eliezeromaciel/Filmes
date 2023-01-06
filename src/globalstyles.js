import styled from "styled-components";

export const Main = styled.main`
    margin: 10px;
    /* box-sizing: border-box; o tamanho da caixa terá 100%, até a borda, contabilizando padding, margin, etc.. poderia ser CONTENT-BOX, mas aqui ela considera só o conteúdo.  */
    /* width: 300px; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: black;
    color: white;
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
`

export const SearchContainer = styled.div`
    display: flex;
    gap: 10px;
    padding: 20px;
`

export const NavContainer = styled.nav`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    /* margin-bottom: 5rem; */
`
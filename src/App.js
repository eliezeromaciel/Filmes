import { useState } from "react";
import {Botao} from "./components/Button";
import { Card } from "./components/card";
import { Input } from "./components/Input";
import {getDatasApi} from "./components/Api/movie"
import {Main, Header, NavContainer, SearchContainer} from "./globalstyles"

function App() {
  const [filmes, setFilmes] = useState([])
  const [nomeFilme, setNomeFilme] = useState("")
  const [anoFilme, setAnoFilme] = useState("")
  const [page, setPage] = useState(1)

  const getMovies = async (nome, ano, pagina)=> {
    const responseDatas = await getDatasApi(nome,ano, pagina)
    setFilmes(responseDatas.Search)
  }

  const handleClickButton = () => {
    (nomeFilme || anoFilme) ?       
    getMovies(nomeFilme, anoFilme, page) : alert ("digite ao menos o nome do filme")
  }

  const handleChangePage = (param) => {
    setPage(page + param)
    console.log(page)
  }

  const funcaoTeste = (param) => {
    setNomeFilme(param.target.value)
    handleClickButton()
  
  }

  return (
    <div>
      <Header>
        <h3>PROJETO REACT, CHAMANDO API</h3>
      </Header>
      <Main >
        <SearchContainer>
          <Input placeholder={"Nome do Filme"} onChange={funcaoTeste}/>
          <Input placeholder={"Ano"} onChange={(param) => {
              setAnoFilme(param.target.value)}}/>
          <Botao onClick={handleClickButton} text={"Buscar"}/>
          <Botao  text={"Limpar"} secondary />
        </SearchContainer>

        <NavContainer>
          {filmes.map( (index) => {
            return (
              <Card key={index.imdbID} poster={index.Poster} title={index.Title} year={index.Year} />
            )}
          )}
        </NavContainer>
      </Main>
      <footer>
        <Botao onClick={()=> {handleChangePage(-1)}} text="Anterior"/>
        <Botao onClick={()=> {handleChangePage(1)}} text="Próxima"/>
      </footer>
    </div>     
  );
}

export default App;

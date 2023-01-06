export const getDatasApi = async (nome, ano, page) => {
    const response = await fetch (`https://www.omdbapi.com/?apikey=494d7bec&s=${nome}&y=${ano}&page=${page}`)
    const responseDatas = await response.json()
    return responseDatas
  }
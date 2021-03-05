const baseUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=13a96fe2f84b375a4952279c842badf6&language=en-US&page=1"
const searchUrl ="https://api.themoviedb.org/3/movie/"
const api ="?api_key=13a96fe2f84b375a4952279c842badf6"
const pictureSearch ="https://image.tmdb.org/t/p/original/"

async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `${searchUrl}${params}${api}`
  } else {
    url = `${baseUrl}${path}`
  }
  console.log(url)
  const response = await fetch(`${url}`)
  const data = await response.json()
  


  return data
}


export { baseUrl, pictureSearch, fetchQuery }



const baseUrl =  process.env.Next_APP_BaseUrl
const searchUrl = process.env.Next_APP_SearchUrl
const api = process.env.Next_APP_Api_Key
const pictureSearch = process.env.Next_APP_PictureSearch

// Next_APP_BaseUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=13a96fe2f84b375a4952279c842badf6&language=en-US&page=1"
// Next_APP_SearchUrl="https://api.themoviedb.org/3/movie/"
// Next_APP_Api_Key="?api_key=13a96fe2f84b375a4952279c842badf6"
// Next_APP_PictureSearch="https://image.tmdb.org/t/p/original/"



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



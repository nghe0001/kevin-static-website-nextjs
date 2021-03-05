const baseUrl =  process.env.Next_APP_BaseUrl
const searchUrl = process.env.Next_APP_SearchUrl
const api = process.env.Next_APP_Api_Key
const pictureSearch = "https://image.tmdb.org/t/p/original/"


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



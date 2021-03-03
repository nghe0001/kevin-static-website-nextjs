// const baseUrl = "http://localhost:1337"


const baseUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=13a96fe2f84b375a4952279c842badf6&language=en-US&page=1"

const searchUrl ="https://api.themoviedb.org/3/search/movie?api_key=13a96fe2f84b375a4952279c842badf6&query="

async function fetchQuery(path, params = null) {
  let url
  if (params !== null) {
    url = `${searchUrl}${params}`
  } else {
    url = `${baseUrl}${path}`
  }
  console.log(url)
  const response = await fetch(`${url}`)
  const data = await response.json()
  const newData = data.results

  return newData
}
export { baseUrl, fetchQuery }



// const baseUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=13a96fe2f84b375a4952279c842badf6&language=en-US&page=1"
// async function fetchQuery(path, params = null) {

//   const req = encodeURI(
//     baseUrl
//   );


//   const response = await fetch(req)
//   const data = await response.json()
//   return data
// }
// export { baseUrl, fetchQuery }


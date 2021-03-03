import Layout from '../../components/Layout'
import Link from 'next/link'
import { baseUrl, fetchQuery } from '../../utils'

export default function Movie({ movie }) {

 


  return (
    <Layout title={movie.title} description={movie.overview}>
      <div className='pt-6'>
        <Link href='/'>
          <a className='text-red-500'>&larr; Back to home</a>
        </Link>
      </div>
      <section className='flex flex-col md:flex-row md:space-x-6 py-10'>
        <div className='w-full md:w-auto'>
          {movie.title}
          <img
            className='rounded-lg w-full sm:w-64'
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
      </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {

    
  const movie = await fetchQuery('movies', `${params.movieId}`)

  return {
    props: {
      movie
    }
  }
}


export async function getStaticPaths() {
  const movies = await fetchQuery('movies')
 
  const paths = movies.map((movie) => {
    return {
      
      params: { movieId: String(movie.id) }
    }
  })
  return {
    paths,
    fallback: false
  }


}
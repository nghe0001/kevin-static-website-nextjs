import Layout from '../components/Layout'
import { fetchQuery } from '../utils'
import { MovieCard } from '../components/MovieCard'
import PropTypes from "prop-types"



export default function Home ({ movies}) {
  return (
    <Layout title='Kevin Next.JS Movies List'
    description= 'your movies'
    
    text="Kevins Page"
    headerTitle="new page">

      <section className="grid grid-cols-1 sm:grid-cols-2 py-10 gap-1 
      sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4">

      {movies.map((movie) => (
        
      <MovieCard key={movie.title} movie={movie} />  ))}


      </section>

    </Layout>
  )

}

// getServerSideProps
export async function getStaticProps() {
  const movies = await fetchQuery('movies')
  
  // console.log(movies.results)
  return {
    props: {
      movies
    }
  }
}
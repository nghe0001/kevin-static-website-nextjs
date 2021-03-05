import Layout from '../components/Layout'
import { fetchQuery } from '../utils'
import { MovieCard } from '../components/MovieCard'
import { useRouter } from 'next/router'
import { en, fr } from '../translation'

export default function Home ({ movies}) {

  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en :fr ;

  return (
    <Layout title='Kevin Next.JS Movies List'
    description= 'your movies'
    headerTitle={t.headerTitle}>


      <section className="grid grid-cols-1 sm:grid-cols-2 py-10 gap-1 
      sm:gap-6 lg:gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4">

      {movies.map((movie) => (
      <MovieCard key={movie.title} movie={movie} />  ))}

      </section>

    </Layout>
  )

}

// getServerSideProps does not work on heroku
export async function getStaticProps() {
  const movies = await fetchQuery('movies')
  
  return {
    props: {
      movies
    }
  }
}
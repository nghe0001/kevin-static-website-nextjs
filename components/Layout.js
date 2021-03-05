import Head from 'next/head'
import PropTypes from "prop-types"
import { useRouter } from 'next/router'
import { en, fr } from '../translation'


export default function Layout(props) {

  const router = useRouter();
  const { locale } = router;

  const t = locale === "en" ? en :fr ;

  const handleLanguageToggle = () => {
    switch(locale){
      case "en":
        router.push(router.pathname, router.pathname, { locale: "fr"})
        break;
      case "fr":
        router.push(router.pathname, router.pathname, { locale: "en"})
        break;
    }
  }

  return (
    <div>
      <Head>
        <meta name='description' content={props.description} />
        <title>{props.title}</title>
      </Head>

      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-black border-b border-gray-700 ">

        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl text-grey-darkest">
            <a className="no-underline text-red-500 " href="/">
              {props.headerTitle}
            </a>
          </h1>

        </div>

        <form className="mb-4 w-full md:mb-0 md:w-1/4">
          <label className="hidden" >Search</label>
          <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder={t.search} type="text"></input>
          <button className="hidden">Submit</button>
        </form>

        <nav>
          <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4">
              <a className="border-t block no-underline hover:underline py-2 text-red-500  md:border-none md:p-0" href="about/about">
              {t.about}
        </a>
            </li>
            <li className="md:ml-4">
              <a className="border-t block no-underline hover:underline py-2 text-red-500  md:border-none md:p-0" onClick={handleLanguageToggle}>
              {t.language}
        </a>
            </li>
          </ul>
        </nav>

      </header>

      <main className='bg-black min-h-screen'>
        <div className='container mx-auto px-3 xl:px-20 pt-10'>{props.children}</div>
      </main>
    </div>
  )
}
Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headerTitle: PropTypes.string

}



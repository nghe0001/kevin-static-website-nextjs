import Link from 'next/link'
import Head from 'next/head'
import PropTypes from "prop-types"

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta name='description' content={props.description} />
        <title>{props.title}</title>
      </Head>

      <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-black border-b border-gray-700 ">

        <div class="flex items-center justify-between mb-4 md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest">
            <a class="no-underline text-red-500 " href="/">
              {props.headerTitle}
            </a>
          </h1>

        </div>

        <form class="mb-4 w-full md:mb-0 md:w-1/4">
          <label class="hidden" for="search-form">Search</label>
          <input class="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text"></input>
          <button class="hidden">Submit</button>
        </form>

        <nav>
          <ul class="list-reset md:flex md:items-center">
            <li class="md:ml-4">
              <a class="border-t block no-underline hover:underline py-2 text-red-500  md:border-none md:p-0" href="about/about">
                About
        </a>
            </li>
            <li class="md:ml-4">
              <a class="border-t block no-underline hover:underline py-2 text-red-500  hover:text-black md:border-none md:p-0" href="#">
                French
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



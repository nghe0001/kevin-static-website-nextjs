import Layout from '../../components/Layout'
import Link from 'next/link'


export default function about() {

    return (
        <Layout title='About NextJS Movie Project'
        description= 'my NextJs Description'
        headerTitle="About NextJS Movie Project">
         <h1 className="text-white font-bold text-xl">NextJS Project Description</h1>
        <p className="text-white">
            <br></br>
            Repo: https://github.com/nghe0001/kevin-static-website-nextjs
            <br></br>
            Heroku: https://kevin-heroku-website.herokuapp.com/
            <br></br>
            Framework: Next.Js
            <br></br>
            By: Kevin Nghiem
            <br></br>
        </p>
        </Layout>
    )
  }



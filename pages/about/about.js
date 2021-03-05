import Layout from '../../components/Layout'
import Link from 'next/link'


export default function about() {

    return (
        <Layout title='About NextJS Movie Project'
        description= 'my NextJs Description'
        headerTitle="About NextJS Movie Project">
            

        
         <h1 className="text-white">NextJS Application Description</h1>
        </Layout>
    )
  }



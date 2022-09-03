import type { NextPage } from 'next'
import Link from 'next/link' // Not full page reload, just get another js page and move to that file, Client Side Rendering
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter() // use with function, use after some action then move to another page

  function goToDetailPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social'
      }
    })
  }

  return (
    <div className={styles.container}>
      <Link href="/about"> 
        <a>Go to About</a>
      </Link>
      <br/>
      <button onClick={goToDetailPage}>Go to post detail page</button>
    </div>
  )
}

export default Home

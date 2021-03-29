import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repellendus ea, voluptate laborum eligendi voluptates sed reprehenderit tempore inventore, fugiat, nulla ipsum dolor ipsa molestiae doloremque distinctio consectetur </p>

      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur eligendi officia ipsam error eaque debitis saepe, culpa illum amet ad, ipsa eos. Omnis vero quas aliquam, facilis aut numquam asperiores, nostrum, mollitia fugiat saepe accusantium! A molestias dolorum eius, nesciunt ducimus facilis commodi! Cupiditate.</p>

      <Link href="/ninjas"><a className={styles.btn}>See Ninjas</a></Link>
    </div>
  )
}

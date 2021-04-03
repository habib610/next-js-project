import Head from 'next/head';
import Link from 'next/link';
import React from 'react'; 
import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    console.log(data)
 

    return {
        props: { ninjas: data}
    }
}
const Ninjas = ({ninjas}) => {
    
    return (
        <>
        <Head>
            <title>Ninjas | All Ninjas</title>
        </Head>
        {
           ninjas.map((ninja, index) => (
                <Link  href={`/ninjas/${ninja.id}`} key={index}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))
        } 
        <Link href="/ninjas/1">
            <a>Ninja one</a>
        </Link>
        <p></p>
        <Link href="/ninjas/2">
            <a>Ninja one</a>
        </Link>
        <p></p>
        <Link href='/ninjas/3'>
            <a>Ninja one</a>
        </Link>
     <p></p>
            <Link href="/"><a>Home Page</a></Link>
        </>
    );
};

export default Ninjas;
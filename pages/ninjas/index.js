import Head from 'next/head';
import Link from 'next/link';
import React from 'react'; 
import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

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
            ninjas.map(ninja => (
                <div className={styles.single} key={ninja.id}>
                    <a >
                        <h3>{ninja.name}</h3>
                    </a>
                </div>
            ))
        }
            <Link href="/"><a>Home Page</a></Link>
        </>
    );
};

export default Ninjas;
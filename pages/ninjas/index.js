import Head from 'next/head';
import Link from 'next/link';
import React from 'react'; 
import styles from '../../styles/Jobs.module.css'

// export const getStaticProps = async()=> {
//     const res = await fetch('https://restcountries.eu/rest/v2/all')
//     const data = await res.json()
//     console.log(data)

//     return {
//         props: { ninjas: data}
//     }
// }
const Ninjas = () => {
    
    return (
        <>
        <Head>
            <title>Ninjas | All Ninjas</title>
        </Head>
        {/* {
            ninjas.map((ninja, index) => (
                <div className={styles.single} key={index}>
                    <a >
                        <h3>{ninja.name}</h3>
                    </a>
                </div>
            ))
        }  */}
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
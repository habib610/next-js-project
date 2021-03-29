import Link from 'next/link';
import React, { useEffect } from 'react';
import {useRouter} from 'next/router'

const NotFound = () => {
    const router =  useRouter()
    
    useEffect(()=> {
        setTimeout(()=> {
        router.push('/')
        }, 1000)
    }, [])
    return (
        <div className="not-found">
            <h1>Oppsss....</h1>
            <h2>Sorry this page is not found</h2>
            <Link href="/"><a>Back To Home</a></Link>
        </div>
    );
};

export default NotFound;
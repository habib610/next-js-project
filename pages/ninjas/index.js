import Link from 'next/link';
import React from 'react';

const Ninjas = () => {
    return (
        <div>
            <h1>All Ninjas</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <Link href="/"><a>Home Page</a></Link>
        </div>
    );
};

export default Ninjas;
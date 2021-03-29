import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Oppsss....</h1>
            <h2>Sorry this page is not found</h2>
            <Link href="/"><a>Back To Home</a></Link>
        </div>
    );
};

export default NotFound;
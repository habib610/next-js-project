import React from 'react';
import Link from 'next/link'
const Header = () => {
    return (
        <nav>
            <div>
                <h1>NINJAS</h1>
            </div>
          <Link href="/"><a >Home</a></Link>  
          <Link href="/about"><a >About</a></Link>  
          <Link href="/ninjas"><a >Ninja Listing</a></Link>  
        </nav>
    );
};

export default Header;
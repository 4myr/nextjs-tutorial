import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const index = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <Link href="/auth"><a>Click to show auth page</a></Link>
            <button onClick={() => Router.push('/auth')}>Show Auth Page</button>
        </div>
    );
}

export default index;
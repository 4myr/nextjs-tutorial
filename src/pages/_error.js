import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const index = () => {
    return (
        <div>
            <h1>Oops! an error occurred!</h1>
            <button onClick={() => Router.push('/')}>Back to home</button>
        </div>
    );
}

export default index;
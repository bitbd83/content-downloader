import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
    return (
        <div className="jumbotron">
            <h1>Welcome</h1>

            <h2>Introduction</h2>
            <Link to="contents" className="btn btn-primary btn-lg">Contents Downloader App</Link>
        </div>
    );
};

export default HomePage;

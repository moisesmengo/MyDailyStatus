import React from 'react';
import '../styles/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }) => {
    return (
        <div>
            <Header />
                <div className='min-h-screen vaicarai mx-auto'>
                    <Component {...pageProps} />
                </div>
            <Footer/>         
        </div>
    )
}

export default App
import React from 'react'
import classes from './Pages.module.scss'

import Parallax from '../components/Parallax'
import ArrowBlock from '../components/ArrowBlock'
import Slider from '../components/Slider'
import Roadmap from '../components/Roadmap'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home: React.FC = () => {
    return (
        <>  
            <Parallax/>
            <div className={classes.wrapper}>
                <div className={classes._container}>
                    <ArrowBlock/>
                    <Roadmap/>
                    <Slider/>
                    <FAQ/>
                    <Footer/>
                </div>
            </div>

        </>
    )
}

export default Home

import React from 'react'
import classes from './Pages.module.scss'

import Parallax from '../components/Parallax'
import ArrowBlock from '../components/ArrowBlock'
import Slider from '../components/Slider'
// import Header from '../components/Header'
import Roadmap from '../components/Roadmap'

const Home: React.FC = () => {
    return (
        <>  
            {/* <Header/> */}
            <Parallax/>
            <div className={classes.wrapper}>
                <div className={classes._container}>
                    <ArrowBlock/>
                    <Slider/>
                </div>
            </div>
            <Roadmap/>

        </>
    )
}

export default Home

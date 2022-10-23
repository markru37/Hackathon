import React from 'react'
import classes from './Pages.module.scss'

import Parallax from '../components/Parallax'
import ArrowBlock from '../components/ArrowBlock'
import Slider from '../components/Slider'

const Home: React.FC = () => {
    return (
        <>
            <Parallax/>
            <div className={classes.wrapper}>
                <div className={classes._container}>
                    <ArrowBlock/>
                    <Slider/>
                </div>
            </div>

        </>
    )
}

export default Home

import React from 'react'
import classes from './Pages.module.scss'
import Parallax from '../components/Parallax'
import ArrowBlock from '../components/ArrowBlock'

const Home: React.FC = () => {
    return (
        <>
            <Parallax/>
            <div className={classes.wrapper}>
                <div className={classes._container}>
                    <ArrowBlock/>
                </div>
            </div>

        </>
    )
}

export default Home

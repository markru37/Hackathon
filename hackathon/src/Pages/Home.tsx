import React from 'react'
import classes from './Pages.module.scss'
import Parallax from '../components/Parallax'

const Home: React.FC = () => {
    return (
    <div className={classes.wrapper}>
        <div className={classes.content}>
            <Parallax/>
        </div>
	</div>
    )
}

export default Home

import React from 'react'
import classes from './ArrowBlock.module.scss'
import arrow from '../../assets/img/arrow.png'
import testgif from '../../assets/img/test1.gif'
import arrow_rotate from '../../assets/img/arrow_rotate.png'

const ArrowBlock: React.FC = () => {
    return (
        <div className={classes.main}>
            <div className={classes.main__title}>
                Lorem Ipsum
            </div>
            <div className={classes.arrow__block}>
                <img src={arrow} alt="arrow" className={classes.arrow__block__image} />
                <img src={testgif} alt="gif" className={classes.arrow__block__gif} />
            </div>
            <div className={`${classes.arrow__block} ${classes.arrow__block__rotate}`}>
                <img src={arrow_rotate} alt="arrow" className={`${classes.arrow__block__image}`} />
                <img src={testgif} alt="gif" className={`${classes.arrow__block__gif} ${classes.gif__rotate}`} />
            </div>
            <div className={classes.arrow__block}>
                <img src={arrow} alt="arrow" className={classes.arrow__block__image} />
                <img src={testgif} alt="gif" className={classes.arrow__block__gif} />
            </div>
        </div>
    )
}

export default ArrowBlock

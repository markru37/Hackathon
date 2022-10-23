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
                <div className={classes.arrow__block__info}>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Culpa, pariatur repudiandae cupiditate 
                voluptatem cum enim molestiae nam ipsum harum quos officiis
                 ducimus, corporis eos reiciendis maiores beatae esse facilis error.</div>
            </div>
            <div className={`${classes.arrow__block} ${classes.arrow__block__rotate}`}>
                <img src={arrow_rotate} alt="arrow" className={`${classes.arrow__block__image}`} />
                <img src={testgif} alt="gif" className={`${classes.arrow__block__gif} ${classes.gif__rotate}`} />
                <div className={`${classes.arrow__block__info__rotate}`}>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Culpa, pariatur repudiandae cupiditate 
                voluptatem cum enim molestiae nam ipsum harum quos officiis
                 ducimus, corporis eos reiciendis maiores beatae esse facilis error.</div>
            </div>
            <div className={classes.arrow__block}>
                <img src={arrow} alt="arrow" className={classes.arrow__block__image} />
                <img src={testgif} alt="gif" className={classes.arrow__block__gif} />
                <div className={classes.arrow__block__info}>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Culpa, pariatur repudiandae cupiditate 
                voluptatem cum enim molestiae nam ipsum harum quos officiis
                 ducimus, corporis eos reiciendis maiores beatae esse facilis error.</div>
            </div>
        </div>
    )
}

export default ArrowBlock

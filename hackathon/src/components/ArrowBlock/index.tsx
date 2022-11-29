import React from 'react'
import classes from './ArrowBlock.module.scss'
import arrow from '../../assets/img/arrow.png'
import testgif from '../../assets/img/test1.gif'
import arrow_rotate from '../../assets/img/arrow_rotate.png'

const ArrowBlock: React.FC = () => {
	return (
		<div className={classes.main}>
			<div className={classes.main__title}>
				Видео-презентация
			</div>
			<div className={classes.arrow__block}>
				<span className={classes.span__animate}></span>
				<iframe className={classes.box__animate} width="1280" height="720" src="https://www.youtube.com/embed/6TYkDy54q4E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
			</div>
		</div>
	)
}

export default ArrowBlock

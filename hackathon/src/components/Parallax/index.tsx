import React from 'react'
import classes from './Parallax.module.scss'

const Parallax: React.FC = () => {
    return (
    <div className={classes.wrapper}>
        <div className={classes.content}>
            <div className={classes.header}>
                <div className={classes.layers}>
                    <div className={classes.layer__header}>
                        <div className={classes.layer__header__caption}>Добро пожаловать</div>
                        <div className={classes.layer__header__title}>Young Physic</div>
                    </div>
                    <div className={`${classes.layer} ${classes.layers__base}`} ></div>
                    <div className={`${classes.layer} ${classes.layers__middle}`} ></div>
                    <div className={`${classes.layer}  ${classes.layers__front}`} ></div>
                </div>
            </div>

            <main className={classes.main__page}>
                <div className={classes.main__page__content}>
                    <h2 className={classes.main__page__title}>Вместе к изучению!</h2>
                    <div className={classes.main__page__text}>
                        Открывайте безграничные возможности в познаниях физики. Стройте электрические цепи, которых еще не видел мир и развивайтесь вместе с нашей игрой.
                    </div>
                </div>
            </main>
        </div>
	</div>
    )
}

export default Parallax

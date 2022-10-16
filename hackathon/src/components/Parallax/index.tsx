import React from 'react'
import classes from './Parallax.module.scss'

const Parallax: React.FC = () => {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.layers}>
                    <div className={classes.layer__header}>
                        <div className={classes.layer__header__caption}>Добро пожаловать</div>
                        <div className={classes.layer__header__title}>Хакатон Цифра</div>
                    </div>
                    <div className={`${classes.layer} ${classes.layers__base}`} ></div>
                    <div className={`${classes.layer} ${classes.layers__middle}`} ></div>
                    <div className={`${classes.layer}  ${classes.layers__front}`} ></div>
                </div>
            </header>

            <main className={classes.main__page}>
                <div className={classes.main__page__content}>
                    <h2 className={classes.main__page__title}>Together for adventure</h2>
                    <div className={classes.main__page__text}>
                        Lorem ipsum, dolor sit amet 
                        consectetur adipisicing elit. Voluptatem nesciunt eos reiciendis 
                        voluptas alias sunt fuga non tempore, officiis ad sint 
                        temporibus ab id iste iure molestiae ut enim adipisci.
                    </div>
                </div>
            </main>
        </>
    )
}

export default Parallax

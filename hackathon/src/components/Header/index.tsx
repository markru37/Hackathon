import React from 'react'
import './Header.scss'
import loadMyScript from './script'

const Header: React.FC = () => {
    React.useEffect(()=>{
        loadMyScript()
    },[])
    return (
        <header className='header'>
            <div className="header__container">
                <div className="header__logo">Young Physic</div>

                <div className="header__burger">
                    <span></span>
                </div>
                <nav className="header__menu menu">
                    <ul className="menu__list">
                        <div className="box__animate">
                            <span className="span__animate"></span>
                            <li className="menu__item"><a href="#" className="menu__link">Home</a></li>
                        </div>
                        <div className="box__animate">
                            <span className="span__animate"></span>
                            <li className="menu__item"><a href="#" className="menu__link">Card</a></li>
                        </div>
                        <div className="box__animate">
                            <span className="span__animate"></span>
                            <li className="menu__item"><a href="#" className="menu__link">Team</a></li>
                        </div>
                        <div className="box__animate">
                            <span className="span__animate"></span>
                            <li className="menu__item"><a href="#" className="menu__link">Roadmap</a></li>
                        </div>
                        <div className="box__animate">
                            <span className="span__animate"></span>
                            <li className="menu__item"><a href="#" className="menu__link">FAQ</a></li>
                        </div>
                        <div className="box__animate">
                            <span className="span__animate"></span>
                            <li className="menu__item"><a href="#" className="menu__link">Footer</a></li>
                        </div>
                    </ul>
                </nav>
            </div>            
        </header>
    )
}

export default Header

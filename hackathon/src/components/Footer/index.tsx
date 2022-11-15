import React from 'react'
import './Footer.scss'
import vk from '../../assets/img/vk.svg'
import telegram from '../../assets/img/telegram.svg'
import github from '../../assets/img/github.svg'

const Footer:React.FC = () => {
    return (
    <footer className="footer">

        <div className="footer_section">
            <div className="footer__body wrapper">
                <div className="footer_title">Let's stay in touch!</div>
                <div className="footer__container_block">
                    <div className="page__subscribe subscribe">
                        <div className="subscribe__container">
                            <div className="subscribe__body ">
                                <h4 className="subscribe__title ">Подписаться на последние обновления</h4>
                                <form action="#" className="subscribe__form">
                                    <input type="email" required name="form[]" placeholder="Your e-mail" className="subscribe__input"/>
                                    <button type="submit" className="subscribe__button">Подписаться</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer_seo">
                        <a href="https://vk.com/trapismyup" className="seo_butt">FOLLOW US ON VK <img className="svg_socweb" src={vk} alt="vk" /></a>
                        <a href="#" className="seo_butt" >ADD US ON TG: <b className="link__tg">@ruslanpolakov</b><img className="svg_socweb" src={telegram} alt="telegram" /></a>
                        <a href="https://github.com/markru37" className="seo_butt" >FOLLOW US ON GITHUB <img className="svg_socweb" src={github} alt="github" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer

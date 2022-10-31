import React from 'react'
import './Roadmap.scss'

import spaceplan from '../../assets/img/spaceplan.png'
import plancube from '../../assets/img/plancube.png'

import loadMyScript from './script.js'


const Roadmap: React.FC = () => {
    React.useEffect(()=>{
        loadMyScript()
    },[])
    return (
        <div className="main_roadmap">
            <div className="space__bg"><img src={spaceplan} alt=""/></div>
            <div className="cube__bg"><img src={plancube} alt=""/></div>

            <div className="roadmap_section ">
                <div className="roadmap_title _anim-items">ROADMAP</div>
                <div className="roadmap_list">
                    <div className="line"></div>
                    <div className="line-active"></div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Главная миссия</span><br/>
                                Погрузись в наш мир и изучите процесс сборки, запуска электрических цепей. Начинай прокачивать свой skill в физике прямо сейчас!  
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Добро пожаловать в наш мир</span><br/>
                            Получи стартовый набор юного физика и отправляйся покорять "Эвересты" электродинамики вместе со своими единомышленниками! 
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Работа на скорость</span><br/>
                            Не трать время на тестирование и проверку техники безопасности, а запускай сразу схему и смотри свои ошибки! 
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem Ipsum Dolores</span><br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae, distinctio quod dolore voluptatem 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae, distinctio quod dolore voluptatem
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem Ipsum</span><br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae, distinctio quod dolore voluptatem 
                        incidunt vel sunt ipsum dolores fugiat illo itaque totam minus, quia, reiciendis praesentium saepe quos ipsa.
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem Ipsum & Ipsum</span><br/>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi fugit saepe et laboriosam culpa 
                            doloribus cumque! Totam id, tempora officia atque voluptatibus impedit blanditiis maiores! Alias eum minima a eius! 
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquid qui, possimus a mollitia reiciendis at non dignissimos iste 
                            ullam sit molestias labore error aliquam dolorem dicta accusantium eveniet consequuntur. <a data-goto=".page__section_6" href="" className="menu__link spaceship_more">here</a>
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem ipsum & P2I</span><br/>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis.</div>
                            <div className="roadmap_text_desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                    </div>
                        </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Takeoff</span><br/>
                            <nav>
                                <ul className="roadmap__list">
                                    <li>  deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis.
                                    </li>
                                    <li>  deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. 
                                    </li>
                                    <li>    deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis.
                                    </li>
                                    <li>    deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis. Оfficia debitis
                                    </li>
                                    <li> deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum
                                    </li>
                                    <li>  deserunt itaque nisi minima cumque. Aliquid 
                                    </li>
                                    <li>   deserunt itaque nisi minima cumque
                                    </li>
                                    <li>   Lorem Ipsum
                                    </li>
                                    <li>Physic</li>
                                </ul>
                            </nav>
                            <div className="roadmap_text_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis</div>

                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem dolor sit amet</span><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem ipsum</span><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque.
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem ipsum dolor</span><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitisLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem ipsum dolor sit amet</span><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitisLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitisLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem ipsum dolor sit amet</span><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis
                        </div>
                    </div>
                    <div className="roadmap_item">
                        <div className="roadmap_bullet"></div>
                        <div className="roadmap_text">
                            <span className="roadmap_text_title">Lorem ipsum dolor sit amet</span><br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis
                            <div className="roadmap_text_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid, deleniti illum illo pariatur 
                                deserunt itaque nisi minima cumque. Aliquid laborum voluptatum tempora vel. Quis voluptatum aut et officia debitis</div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Roadmap;

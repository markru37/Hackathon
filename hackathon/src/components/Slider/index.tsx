import React from 'react'

import './Slider.scss'

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider_img from '../../assets/img/slider_img.jpg';
import sasha from '../../assets/img/sasha.jpg';
import artem from '../../assets/img/artem.jpg';
import mark from '../../assets/img/mark.jpg';
import ruslan from '../../assets/img/ruslan.jpg';
import jenya from '../../assets/img/jenya.jpg';
import dima from '../../assets/img/dima.jpg';

const Slider: React.FC = () => {
    
    return (
        <div className="report__container swiper-container">

            <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            // breakpoints={{
            //     576: {
            //       // width: 576,
            //       slidesPerView: 2,
            //     },
            //     768: {
            //       // width: 768,
            //       slidesPerView: 1,
            //     },
            //   }}

        >
            <div className="swiper-wrapper">
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={jenya} alt="avatar" className="report__img" />
                            </div>
                            <div className="report__text"><i className="technology__text">Дизайнер</i> <br />
                                Любит творчество и цифры, поэтому цифровое искусство ему по душе✌🏻
                                Гуру дизайна и моделирования
                            </div>
                            <div className="report__name">Евгений Лебедев</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={sasha} alt="avatar" className="report__img" />
                            </div>
                            <div className="report__text"> <i className="technology__text">IT-специалист</i> <br />
                                Специалист в любых реальностях программирования, человек, который готов жить на кофе несколько суток подряд, преподаватель, фотограф, видеограф
                            </div>
                            <div className="report__name">Александр Кириллов</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={artem} alt="slider_img" className="report__img" />
                            </div>
                            <div className="report__text"> <i className="technology__text">IT-специалист</i> <br />
                                Программист без времени...
                            </div>
                            <div className="report__name">Артём Бояркин</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={mark} alt="slider_img" className="report__img" />
                            </div>
                            <div className="report__text"> <i className="technology__text">IT-специалист</i> <br />
                                Лёгкий на подъём, молодой программист, который готов всегда находить легкий способ для подъёма
                            </div>
                            <div className="report__name">Марк Румянцев</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={dima} alt="slider_img" className="report__img" />
                            </div>
                            <div className="report__text"><i className="technology__text">IT-специалист</i> <br />
                                Мотивационный лидер, креативный, многофункциональный специалист, душа команды
                            </div>
                            <div className="report__name">Дмитрий Школьников</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={ruslan} alt="slider_Img" className="report__img" />
                            </div>
                            <div className="report__text"> <i className="technology__text"> Менеджер и маркетолог</i> <br />
                            Перспективный молодой человек с большими планами на жизнь, умеет выкрутиться из любой ситуации
                            </div>
                            <div className="report__name">Руслан Поляков</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={slider_img} alt="slider_Img" className="report__img" />
                            </div>
                            <div className="report__text"><i className="technology__text">IT-специалист</i> <br />
                                Позитивный молодой человек, смекалист, всегда готов к изучению чего-то нового и неизведанного
                            </div>
                            <div className="report__name">Владимир Кожухарь</div>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
        </div>
    )
}

export default Slider

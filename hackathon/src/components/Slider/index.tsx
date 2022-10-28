import React from 'react'

import './Slider.scss'

import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider_img from '../../assets/img/slider_img.jpg';

const Slider: React.FC = () => {
    
    return (
        <div className="report__container swiper-container">

            <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className="swiper-wrapper">
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={slider_img} alt="avatar" className="report__img" />
                            </div>
                            <div className="report__text">“ This is an super space for your customers qoute. Don’t
                                worry it works smooth as pie. You will get all what you need by writiing a text
                                here “
                            </div>
                            <div className="report__name">Name and Surname</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={slider_img} alt="avatar" className="report__img" />
                            </div>
                            <div className="report__text">“ This is an super space for your customers qoute. Don’t
                                worry it works smooth as pie. You will get all what you need by writiing a text
                                here “
                            </div>
                            <div className="report__name">Name and Surname</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={slider_img} alt="slider_img" className="report__img" />
                            </div>
                            <div className="report__text">“ This is an super space for your customers qoute. Don’t
                                worry it works smooth as pie. You will get all what you need by writiing a text
                                here “
                            </div>
                            <div className="report__name">Name and Surname</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={slider_img} alt="slider_img" className="report__img" />
                            </div>
                            <div className="report__text">“ This is an super space for your customers qoute. Don’t
                                worry it works smooth as pie. You will get all what you need by writiing a text
                                here “
                            </div>
                            <div className="report__name">Name and Surname</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={slider_img} alt="slider_img" className="report__img" />
                            </div>
                            <div className="report__text">“ This is an super space for your customers qoute. Don’t
                                worry it works smooth as pie. You will get all what you need by writiing a text
                                here “
                            </div>
                            <div className="report__name">Name and Surname</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide">
                        <div className="report__column">
                        <div className="report__photos">
                                <img src={slider_img} alt="slider_Img" className="report__img" />
                            </div>
                            <div className="report__text">“ This is an super space for your customers qoute. Don’t
                                worry it works smooth as pie. You will get all what you need by writiing a text
                                here “
                            </div>
                            <div className="report__name">Name and Surname</div>
                        </div>
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
        </div>
    )
}

export default Slider

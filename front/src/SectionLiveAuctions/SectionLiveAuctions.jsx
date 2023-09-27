import './SectionLiveAuctions.scss'
import ImgSlider1 from './imagesSlider/image 10.png'
import ImgSlider2 from './imagesSlider/image 9.png'
import ImgSlider3 from './imagesSlider/unsplash_GfQEdpIkkuw.png'
import iconLiveAuction from './imagesSlider/Profile image1.svg'
import icomHeartLike from './imagesSlider/Vector.svg'
import Button from '../Button/Button.jsx'
import LiveAuctionBackground from './imagesSlider/image-backgroind-blur.png'


// slider
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";






function SectionLiveAuctions() {



    return (
        <section className='section live-auctions'>
            <div className='container live-auctions__container'>
                <h2 className='live-auctions__title'>
                    Live Auctions
                </h2>
                <Swiper
                    watchSlidesProgress={true}
                    slidesPerView={3}
                    spaceBetween={50}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='live-auctions__slider'>
                            <img className='live-auctions__slider-image' src={ImgSlider1} alt="" />
                            <div className='live-auctions__slider-about'>
                                <img className='live-auctions__slider-icon' src={iconLiveAuction} alt="live-auction-icon" />
                                <p className='live-auctions__slider-about-sub-title'>
                                    Virtual Art
                                </p>
                                <div className='live-auctions__slider-about-text'>
                                    <img className='live-auctions__slider-icon-like' src={icomHeartLike} alt="live-auctions-icon-like-slider" />
                                    <p className='live-auctions__slider-canc'>
                                        92
                                    </p>
                                </div>
                            </div>
                            <div className='live-auctions__slider-current'>
                                <p className='live-auctions__slider-current-title'>
                                    Current Bid
                                </p>
                                <p className='live-auctions__slider-current-price'>
                                    4.89 ETH
                                </p>
                            </div>
                            <div className='live-auctions__button'>
                                <Button
                                    className={'live-auctions__btn'}
                                    textButton={'Place a bid'}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='live-auctions__slider'>
                            <img className='live-auctions__slider-image' src={ImgSlider2} alt="" />
                            <div className='live-auctions__slider-about'>
                                <img className='live-auctions__slider-icon' src={iconLiveAuction} alt="live-auction-icon" />
                                <p className='live-auctions__slider-about-sub-title'>
                                    Virtual Art
                                </p>
                                <div className='live-auctions__slider-about-text'>
                                    <img className='live-auctions__slider-icon-like' src={icomHeartLike} alt="live-auctions-icon-like-slider" />
                                    <p className='live-auctions__slider-canc'>
                                        92
                                    </p>
                                </div>
                            </div>
                            <div className='live-auctions__slider-current'>
                                <p className='live-auctions__slider-current-title'>
                                    Current Bid
                                </p>
                                <p className='live-auctions__slider-current-price'>
                                    4.89 ETH
                                </p>
                            </div>
                            <div className='live-auctions__button'>
                                <Button
                                    className={'live-auctions__btn'}
                                    textButton={'Place a bid'}
                                />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide> <div className='live-auctions__slider'>
                        <img className='live-auctions__slider-image' src={ImgSlider3} alt="" />
                        <div className='live-auctions__slider-about'>
                            <img className='live-auctions__slider-icon' src={iconLiveAuction} alt="live-auction-icon" />
                            <p className='live-auctions__slider-about-sub-title'>
                                Virtual Art
                            </p>
                            <div className='live-auctions__slider-about-text'>
                                <img className='live-auctions__slider-icon-like' src={icomHeartLike} alt="live-auctions-icon-like-slider" />
                                <p className='live-auctions__slider-canc'>
                                    92
                                </p>
                            </div>
                        </div>
                        <div className='live-auctions__slider-current'>
                            <p className='live-auctions__slider-current-title'>
                                Current Bid
                            </p>
                            <p className='live-auctions__slider-current-price'>
                                4.89 ETH
                            </p>
                        </div>
                        <div className='live-auctions__button'>
                            <Button
                                className={'live-auctions__btn'}
                                textButton={'Place a bid'}
                            />
                        </div>

                    </div></SwiperSlide>
                    <SwiperSlide> <div className='live-auctions__slider'>
                        <img className='live-auctions__slider-image' src={ImgSlider3} alt="" />
                        <div className='live-auctions__slider-about'>
                            <img className='live-auctions__slider-icon' src={iconLiveAuction} alt="live-auction-icon" />
                            <p className='live-auctions__slider-about-sub-title'>
                                Virtual Art
                            </p>
                            <div className='live-auctions__slider-about-text'>
                                <img className='live-auctions__slider-icon-like' src={icomHeartLike} alt="live-auctions-icon-like-slider" />
                                <p className='live-auctions__slider-canc'>
                                    92
                                </p>
                            </div>
                        </div>
                        <div className='live-auctions__slider-current'>
                            <p className='live-auctions__slider-current-title'>
                                Current Bid
                            </p>
                            <p className='live-auctions__slider-current-price'>
                                4.89 ETH
                            </p>
                        </div>
                        <div className='live-auctions__button'>
                            <Button
                                className={'live-auctions__btn'}
                                textButton={'Place a bid'}
                            />
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                <div className='live-auctions__button-view-all'>
                    <Button
                        className={'btn-view-all'}
                        textButton={'View All'}
                    />

                </div>
            </div>
            <div className='live-auctions__backgrond'>
                <img src={LiveAuctionBackground} alt="backgound-section-live-auction" />
            </div>
        </section>

    )
}

export default SectionLiveAuctions;
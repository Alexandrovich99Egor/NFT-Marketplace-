import Button from "../Button/Button";
import HeroImage from './SectionHero.png'
import BlurBg from './Section-Hero-bg-blur.png'
import ImageClientsBinance from './icon-partners/binance 1.png';
import ImageClientsCoinBase from './icon-partners/Vector.png';
import ImageClientsBitMex from './icon-partners/bitmex 1.png';
import ImageClientsBlockChain from './icon-partners/Vector (1).png';

import './SectionAbout.scss'


function SectionHero() {
    return (
        <section className="section hero">
            <div className="container hero__container">
                <div className="hero__about">
                    <h1 className="hero__title">
                        Explore, Buy and Sell the Best NFTs!
                    </h1>
                    <div className="hero__buttons">
                        <Button
                            className={'hero-btn-bg-orange'}
                            textButton={'Explore'}
                        />
                        <Button
                            className={'hero-btn'}
                            textButton={'Create'}
                        />
                    </div>
                    <div className="hero__counter">
                        <div className="hero__counter-wrapp">
                            <h1 className="hero__counter-title">
                                32k+
                            </h1>
                            <p className="hero__counter-sub-title">
                                Artworks
                            </p>
                        </div>
                        <div className="hero__counter-wrapp">
                            <h1 className="hero__counter-title">
                                20k+
                            </h1>
                            <p className="hero__counter-sub-title">
                                Auctions
                            </p>
                        </div>
                        <div className="hero__counter-wrapp">
                            <h1 className="hero__counter-title">
                                12k+
                            </h1>
                            <p className="hero__counter-sub-title">
                                Creators
                            </p>
                        </div>


                    </div>
                </div>
                <div className="hero__images">
                    <img className="hero__image" src={HeroImage} alt="" />
                    <div className="hero__image-about">
                        <p className="hero__image-sub-title">
                            Artist
                            @wzard
                        </p>
                        <Button
                            className={'hero__btn'}
                            textButton={'Start Bid'}
                        />
                    </div>
                </div>
                <div className="hero__clients">
                    <div className="hero__clients-item">
                        <a className="hero__clients-link" href="">
                            <img className="hero__clients-icon" src={ImageClientsBinance} alt="binance-img" />
                        </a>
                    </div>
                    <div className="hero__clients-item">
                        <a className="hero__clients-link" href="">
                            <img className="hero__clients-icon" src={ImageClientsCoinBase} alt="coinbase-img" />
                        </a>
                    </div>
                    <div className="hero__clients-item">
                        <a className="hero__clients-link" href="">
                            <img className="hero__clients-icon" src={ImageClientsBitMex} alt="bitmex-img" />
                        </a>
                    </div>
                    <div className="hero__clients-item">
                        <a className="hero__clients-link" href="">
                            <img className="hero__clients-icon" src={ImageClientsBlockChain} alt="coinbase-img" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero__background">
                <img className="hero__background-image" src={BlurBg} alt="" />
            </div>

        </section>
    )
}

export default SectionHero;
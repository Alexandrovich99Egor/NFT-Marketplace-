import React, { useState, useEffect } from "react";
import './SectionHowItWorks.scss'
import WalletImage1 from './HowItWorksImage/Wallet.png';
import WalletImage2 from './HowItWorksImage/image2.png';
import WalletImage3 from './HowItWorksImage/image3.png';
import WalletImage4 from './HowItWorksImage/image4.png';


function SectionHowItWorks() {
    return (
        <section className='section how-it-works'>
            <div className="container how-it-works__container">
                <h2 className='how-it-works__title'>
                    How it works
                </h2>
                <div className='how-it-works__items'>
                    <div className='how-it-works__items-wallet'>
                        <img className='how-it-works__item-image' src={WalletImage1} alt="wallet-img" />
                        <p className='how-it-works__sub-title'>
                            Set up your wallet
                        </p>
                    </div>
                    <div className='how-it-works__stroke-animation'>
                    </div>
                    <div className='how-it-works__items-wallet'>
                        <img className='how-it-works__item-image' src={WalletImage2} alt="wallet-img" />
                        <p className='how-it-works__sub-title'>
                            Create your collection
                        </p>
                    </div>
                    <div className='how-it-works__stroke-animation'>
                    </div>
                    <div className='how-it-works__items-wallet'>
                        <img className='how-it-works__item-image' src={WalletImage3} alt="wallet-img" />
                        <p className='how-it-works__sub-title'>
                            Add your NFTs
                        </p>
                    </div>
                    <div className='how-it-works__stroke-animation'>
                    </div>
                    <div className='how-it-works__items-wallet'>
                        <img className='how-it-works__item-image' src={WalletImage4} alt="wallet-img" />
                        <p className='how-it-works__sub-title'>
                            List them for sale
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHowItWorks;
import React from 'react';
import '../styles/ProductShowcase.scss';

import iphoneImg from '../assets/iphone14pro.png';
import ps5Img from '../assets/playstation5.png';
import airpodsMaxImg from '../assets/appleairpodsmax.png';
import visionProImg from '../assets/applevisionpro.png';
import macbookImg from '../assets/MacbookPro.png';

const HeroSection = () => {
    return (
        <div className="product-showcase">
            <div className="iphone-hero">
                <div className="hero-content">
                    <div className="hero-badge">Pro.Beyond.</div>
                    <h1 className="iphone-title">IPhone 14 <span className="iphone-pro">Pro</span></h1>
                    <p className="hero-subtitle">Created to change everything for the better. For everyone</p>
                    <button className="shop-button">Shop Now</button>
                </div>
                <img
                    src={iphoneImg}
                    alt="iPhone 14 Pro"
                    className="hero-image"
                />
            </div>

            <div className="product-grid">
                <div className="product-column ps5-column">
                    <div className="product-card ps5">
                        <img
                            src={ps5Img}
                            alt="PlayStation 5"
                            className="product-image"
                        />
                        <div className="product-content">
                            <h2>Playstation 5</h2>
                            <p>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                        </div>
                    </div>

                    <div className="product-row">
                        <div className="product-card airpods product-card-airpods">
                            <img
                                src={airpodsMaxImg}
                                alt="AirPods Max"
                                className="product-image"
                            />
                            <div className="product-content">
                                <h2>Apple AirPods <span className="product-title-accent">Max</span></h2>
                                <p>Computational audio. Listen, it's powerful</p>
                            </div>
                        </div>

                        <div className="product-card vision-pro-card">
                            <img
                                src={visionProImg}
                                alt="Vision Pro"
                                className="product-image"
                            />
                            <div className="product-content">
                                <h2>Apple Vision <span className="product-title-accent">Pro</span></h2>
                                <p>An immersive way to experience entertainment</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-column macbook-column">
                    <div className="product-card macbook">
                        <img
                            src={macbookImg}
                            alt="MacBook Air"
                            className="product-image"
                        />
                        <div className="product-content">
                            <h2 className="macbook-title">Macbook</h2>
                            <h3 className="macbook-title-pro1"><span className="product-title-accent">Air</span></h3>
                            <p>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina</p>
                            <button className="shop-button">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
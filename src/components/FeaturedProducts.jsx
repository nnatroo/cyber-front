import React from 'react';
import styles from '../modules/FeaturedProducts.module.scss';
import ps5 from '../assets/Ps5.png';
import airpods from '../assets/Apple-Airpods.png';
import visionPro from '../assets/Vision-Pro.png';
import macbook from '../assets/MacBook-Pro.png';
import airpodsMobile from '../assets/Airpods-img-mobile.png';
import visionMobile from '../assets/Vision-img-mobile.png';
import ps5Mobile from '../assets/Ps5-img-mobile.png';
import macbookMobile from '../assets/Macbook-img-mobile.png';

const FeaturedProducts = () => {
  return (
    <>
      <section className={styles['featured-products-section']}>
        <div className={styles['left-side-products']}>
          <div className={styles['first-line-products']}>
            <figure className={styles['ps5-img-wrapper']}>
              <img className={styles['ps5-img']} src={ps5} alt="ps-5" />
            </figure>
            <div className={styles['ps5-details-wrapper']}>
              <h2 className={styles['ps5-title']}>Playstation 5</h2>
              <p className={`${styles['feature-card-description']} ${styles['margin-top-16px']}`}>
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>

          <div className={styles['second-line-products']}>
            <div className={styles['left-second-line-products']}>
              <figure className={styles['airpods-img-wrapper']}>
                <img className={styles['airpods-img']} src={airpods} alt="airpods" />
              </figure>
              <div className={styles['airpods-details-wrapper']}>
                <h2>Apple AirPods <span>Max</span></h2>
                <p className={`${styles['feature-card-description']} ${styles['margin-top-8px']}`}>
                  Computational audio. Listen, it's powerful
                </p>
              </div>
            </div>

            <div className={styles['right-second-line-products']}>
              <figure className={styles['vision-img-wrapper']}>
                <img className={styles['vision-pro-img']} src={visionPro} alt="vision-pro" />
              </figure>
              <div className={styles['vision-pro-details-wrapper']}>
                <h2>Apple Vision <span>Pro</span></h2>
                <p className={`${styles['feature-card-description']} ${styles['margin-top-8px']}`}>
                  An immersive way to experience entertainment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['right-side-products']}>
          <div className={styles['right-side-products-content']}>
            <h2>Macbook <span>Air</span></h2>
            <p className={`${styles['feature-card-description']} ${styles['margin-top-16px']}`}>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className={styles['black-btn-large']}>Shop Now</button>
          </div>
          <figure className={styles['right-side-product-img-wrapper']}>
            <img className={styles['mac-img']} src={macbook} alt="macbook-air" />
          </figure>
        </div>
      </section>

      <section className={styles['featured-products-section-mobile']}>
        <div className={`${styles['feature-product-card']} ${styles['airpods-card-mobile']}`}>
          <img className={styles['airpods-img-mobile']} src={airpodsMobile} alt="Airpods" />
          <h3 className={styles['feature-product-card-title']}>
            Apple AirPods <span>Max</span>
          </h3>
          <p className={`${styles['feature-card-description']} ${styles['margin-top-8px']}`}>
            Computational audio. Listen, it's powerful
          </p>
        </div>

        <div className={`${styles['feature-product-card']} ${styles['vision-pro-card-mobile']}`}>
          <img className={styles['vision-pro-img-mobile']} src={visionMobile} alt="Vision-Pro" />
          <h3 className={`${styles['feature-product-card-title']} ${styles['vision-pro-mobile-title']}`}>
            Apple Vision <span>Pro</span>
          </h3>
          <p className={`${styles['feature-card-description']} ${styles['margin-top-8px']}`}>
            An immersive way to experience entertainment
          </p>
        </div>

        <div className={`${styles['feature-product-card']} ${styles['ps5-card-mobile']}`}>
          <img className={styles['ps5-img-mobile']} src={ps5Mobile} alt="Ps5" />
          <h3 className={styles['feature-product-card-title']}>
            Playstation <span>5</span>
          </h3>
          <p className={`${styles['feature-card-description']} ${styles['margin-top-8px']}`}>
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>

        <div className={`${styles['feature-product-card']} ${styles['macbook-card-mobile']}`}>
          <img className={styles['macbook-img-mobile']} src={macbookMobile} alt="Macbook-Pro" />
          <h3 className={styles['feature-product-card-title']}>
            <span>Macbook</span> Air
          </h3>
          <p className={`${styles['feature-card-description']} ${styles['margin-top-16px']} ${styles['bottom-margin-none']}`}>
            The new 15‑inch MacBook Air makes room for more of what you love with
            a spacious Liquid Retina display.
          </p>
          <button className={styles['black-btn-large-mobile']}>Shop Now</button>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;

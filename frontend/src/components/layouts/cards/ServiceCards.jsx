import React from 'react';
import styles from './ServiceCards.module.css';

function ServiceCard({ image, altText, title, description }) {
  return (
    <div className= {`col-sm-6 position-relative ${styles.card}`}>
      <div className= {styles.cardImage}>
        <img width="555px" height="343px" src={image} alt={altText} />
      </div>
      <div className={`${styles.cardBlock} card-block`}>
        <div className="row-2">
          <p className={`${styles.title} text-center text-uppercase pt-5 pb-3`}>
            <strong className={styles.servicesCardTitle}>{title}</strong>
          </p>
          <div className = {` pb-5 ${styles.description}`}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

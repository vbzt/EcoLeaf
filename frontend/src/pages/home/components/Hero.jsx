import styles from './Hero.module.css'

import terra from '../../../assets/images/terra3d 1.png'

const Hero = () => (
  <section className={`${styles.sectionContent} ${styles['landing-h']}`}>
      <div className={styles.leftContent}>
        <p className={styles.welcomeText}>
          BOAS-VINDAS A <span className = 'colored'>ECO</span>LEAF
        </p>
        <div className={styles.leftContent}>
          <h1 className={styles.mainHeading}>
            Energia <span className = 'colored'>Limpa</span> e Água <span className = 'colored'>Sustentável</span> para um Futuro <span className = 'colored'>Verde</span>
          </h1>
          <p className= {styles.description}>
            Oferecemos instalação de placas solares e sistemas de coleta de água da chuva, ajudando você a tornar sua
            casa mais sustentável e econômica. Confira nosso blog com dicas valiosas e faça a diferença!
          </p>
        </div>
        <a href="/register" className={styles.startNow}>
          <button>COMECE AGORA</button>
        </a>
      </div>
      <img className={styles.terra} src= {terra} alt="img-terra" />
  </section>
);

export default Hero
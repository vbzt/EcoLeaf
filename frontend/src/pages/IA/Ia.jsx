import styles from './Ia.module.css'

import foto from '../../assets/images/ia/IA.png'

const Ia = () => (
  <section className={`${styles.sectionContent} ${styles['landing-h']}`}>
      <div className={styles.leftContent}>
        <div className={styles.leftContent}>
          <h1 className={styles.mainHeading}>
            Nossa <span className = 'colored'>Inteligência Artificial</span>
          </h1>
          <p className= {styles.description}>
          A equipe EcoLeaf oferece uma Inteligência Artificial integrada que, com base nas condições climáticas e na sua localização, recomenda a planta ideal para você cuidar. Além disso, ela fornece uma breve descrição sobre a planta, ajudando você a conhecê-la melhor e a entender os cuidados necessários para mantê-la saudável.
          </p>
        </div>
        <a href="/plantas/ia/gerar" className={styles.startNow}>
          <button>QUERO COMEÇAR!</button>
        </a>
      </div>
      <img className={styles.foto} src= {foto} alt="img-ia" />
  </section>
)

export default Ia
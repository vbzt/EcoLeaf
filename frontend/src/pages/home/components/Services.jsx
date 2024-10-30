import ServiceCard from '../../../components/layouts/cards/ServiceCards';
import styles from './Services.module.css'

import painel from '../../../assets/images/services-img/pexels-akilmazumder-1072824.jpg'
import agua from '../../../assets/images/services-img/image-water-system.png'

const Services = () => {
  return (
    <section>
      <p className={`${styles.textLarge} text-center pt-5`}>Serviços Oferecidos</p>
      <div className="d-flex justify-content-center">
        <span className={styles.linha}></span>
      </div>
      <div className= {`container d-flex justify-content-center text-center gap-3 mt-5 ${styles.services}`}>
        <ServiceCard
          image= {painel}
          altText="Cuidado com plantas"
          title="IA de Plantas Personalizada"
          description="Com base nas condições climáticas da sua região, nossa IA recomenda as plantas ideais para seu ambiente. Além disso, você receberá dicas práticas de cuidados específicos, garantindo um crescimento saudável. Deixe a inteligência artificial ajudar você a escolher e cuidar das plantas certas para o seu espaço!"

        />
        <ServiceCard
          image= {agua}
          altText="Coleta de Água da Chuva"
          title="Coleta de Água da Chuva"
          description="Fornecemos soluções para a coleta de água da chuva, promovendo economia e sustentabilidade.
            Nossos sistemas capturam e filtram a água, integrando-se perfeitamente ao seu espaço.
            Com instalação profissional, garantimos eficiência e qualidade, ajudando a reduzir o consumo
            de água potável e o impacto ambiental. Invista na coleta de água da chuva e faça a diferença."
        />
      </div>
    </section>
  );
}

export default Services

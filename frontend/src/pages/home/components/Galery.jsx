import styles from './Galery.module.css'

import img1 from '../../../assets/images/info/jardinagem1.png'
import img2 from '../../../assets/images/info/jardinagem2.png'
import img3 from '../../../assets/images/info/jardinagem3.png'
import img4 from '../../../assets/images/info/como-cuidar-das-plantas-quando-for-viajar 1.png'
import img5 from '../../../assets/images/info/sistemaDeAgua.png'
import img6 from '../../../assets/images/info/sistemaDeAgua2.png'
import img7 from '../../../assets/images/info/sistemaDeAgua3.png'
import img8 from '../../../assets/images/info/jardineiro1.png'

const galeriaItems = [
  {
    src: img1,
    alt: 'alecrim-img',
    title: 'Transformação Ambiental',
    subtitle: 'Criamos espaços sustentáveis, ajudando a transformar ambientes em locais que respeitam e preservam o ecossistema.',
  },
  {
    src: img2,
    alt: 'camomila-img',
    title: 'Jardinagem',
    subtitle: 'Oferecemos serviços de jardinagem com foco na preservação e valorização da natureza, para ambientes mais verdes e saudáveis.',
  },
  {
    src: img3,
    alt: 'curucuma-img',
    title: 'Jardinagem',
    subtitle: 'Nossa equipe especializada cuida de áreas verdes com práticas ecológicas, promovendo o crescimento sustentável e saudável.',
  },
  {
    src: img4,
    alt: 'salvia-img',
    title: 'Cuidado com as Plantas',
    subtitle: 'Uma de nossas clientes compartilhou em suas redes sociais seus cuidados com plantas. Conheça nossas dicas para mantê-las saudáveis e felizes enquanto você estiver fora!',
  },
  {
    src: img5,
    alt: 'dente-de-leao-img',
    title: 'Coleta de Água',
    subtitle: 'Nossos sistemas de coleta de água pluvial são soluções sustentáveis que ajudam sua família a economizar e a cuidar do meio ambiente de forma inteligente.',
  },
  {
    src: img6,
    alt: 'beladona-img',
    title: 'Coleta de Água',
    subtitle: 'Descubra como pequenos negócios podem implementar sistemas de coleta de água e reduzir suas despesas operacionais, contribuindo para um futuro mais sustentável.',
  },
  {
    src: img7,
    alt: 'gordo-lobo-img',
    title: 'Coleta de Água',
    subtitle: 'Implantamos soluções de captação de água que não só economizam recursos, mas também promovem a sustentabilidade e a consciência ambiental em sua residência!',
  },
  {
    src: img8,
    alt: 'mimosa-img',
    title: 'Cuidados com Plantas',
    subtitle: 'Com nossas orientações, você pode cultivar um jardim saudável e vibrante. Conheça técnicas para cuidar de suas plantas e mantê-las sempre bonitas!',
  },
]

const Galery = () => {
  return (
    <section className={`container-fluid mt-5 mb-3 ${styles.sectionInfo}`}>
      <p className={`text-large text-center ${styles.titleHead}`}>Nossa Galeria</p>
      <div className="d-flex justify-content-center">
        <span className={styles.linha}></span>
      </div>

      <div className="row">
        {galeriaItems.map((item, index) => (
          <div key={index} style={{ padding: 0, cursor: 'pointer' }} className="col-md-3 position-relative">
            <div className={styles.imageContainer}>
              <img src={item.src} className={`img-fluid ${styles.image}`} alt={item.alt} />
              <div className={`${styles.overlayGalery} d-flex justify-content-center align-items-center flex-column`}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.subtitle}>{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Galery

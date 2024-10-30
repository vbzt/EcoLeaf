import styles from './Galery.module.css'


import img1 from '../../../assets/images/info/shutterstock_2181180621-16x9-960x540 1.png'
import img2 from '../../../assets/images/info/instacao-de-energia-solar-em-casa-1-1024x508 1.png'
import img3 from '../../../assets/images/info/imagem-post-46 1.png'
import img4 from '../../../assets/images/info/como-cuidar-das-plantas-quando-for-viajar 1.png'
import img5 from '../../../assets/images/info/sistemaDeAgua.png'
import img6 from '../../../assets/images/info/sistemaDeAgua2.png'
import img7 from '../../../assets/images/info/sistemaDeAgua3.png'
import img8 from '../../../assets/images/info/jardineiro1.png'

const galeriaItems = [
  {
    src: img1,
    alt: 'alecrim-img',
    title: 'Painéis Solares',
    subtitle: 'Transformamos residências em modelos de eficiência energética, proporcionando energia limpa e sustentável. Descubra como você também pode fazer a diferença!',
  },
  {
    src: img2,
    alt: 'camomila-img',
    title: 'Painéis Solares',
    subtitle: 'Levamos inovação e tecnologia para empresas, reduzindo custos e impactando positivamente o meio ambiente. Junte-se à revolução solar!',
  },
  {
    src: img3,
    alt: 'curucuma-img',
    title: 'Manutenção de Painéis',
    subtitle: 'Nossa equipe especializada garante o funcionamento otimizado de seu sistema de energia solar, prolongando a vida útil e maximizando a eficiência!',
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
      <p className= {`text-large text-center ${styles.titleHead}`}>Nossa Galeria</p>
      <div className="d-flex justify-content-center">
        <span className={styles.linha}></span>
      </div>

      <div className="row">
        {galeriaItems.map((item, index) => (
          <div key={index} style={{padding: 0, cursor: 'pointer'}} className="col-md-3 position-relative">
            <div className={styles.imageContainer}>
              <img src={item.src} className="img-fluid" alt={item.alt} />
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

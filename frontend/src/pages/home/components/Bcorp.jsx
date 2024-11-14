import React from 'react';
import styles from './Bcorp.module.css';
import bCorpImage from '../../../assets/images/certificado-bcorp.png';

const Bcorp = () => {
  return (
    <section className= {`container d-flex justify-content-between align-items-center ${styles.aboutUs}` }>
      <div className="d-flex flex-column mt-5">
        <div className= {styles.about}> 
        <h1 className={`pb-2 ${styles.title}`}>Sobre a <span className="colored">EcoLeaf</span></h1>
        <p className={styles.description} style={{ textAlign: 'justify' }}>
          A EcoLeaf oferece soluções ecológicas para preservar o meio ambiente e melhorar a qualidade de vida.
          Trabalhamos com a venda e instalação de sistemas de coleta de água da chuva, além de oferecer jardinagem,
          recuperação de áreas verdes e transformação ambiental, criando espaços mais sustentáveis e saudáveis.
          <br />
          <br />
          Como uma empresa B-Corp, assumimos um compromisso com o impacto ambiental e social. Destinamos 8% de
          nossos valores obtidos em projetos para a WWF Brasil, uma ONG voltada à preservação ambiental. Com
          isso, reforçamos nosso propósito de promover um futuro mais sustentável para todos.
        </p>
        </div>
      </div>
      <img src={bCorpImage} alt="selo-bcorp" style={{ width: '27%' }} />
    </section>
  );
};

export default Bcorp;

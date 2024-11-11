import { useEffect, useState } from 'react';
import usePlant from '../../../../hooks/usePlant';
import styles from './GeneratedPlant.module.css';
import { useLocation } from 'react-router-dom';

const GeneratedPlant = () => {
  const { generatePlant } = usePlant();
  const [loading, setLoading] = useState(true);
  const [plant, setPlant] = useState(null);

  const location = useLocation();
  const plantData = location.state?.plantsData;

  useEffect(() => {
    const fetchGeneratedPlant = async () => {
      setLoading(true)
      try {
        const response = await generatePlant(plantData)
        setPlant(response)
      } catch (error) {
        console.error('Erro ao gerar planta:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneratedPlant()
  }, []); 

  if (loading) {
    return (
      <div className={styles.loading}>
        <h1>Gerando sua <span className="colored">planta...</span></h1>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className={styles.error}>
        Erro ao gerar a planta. Tente novamente mais tarde.
      </div>
    );
  }

  return (
    <section className= {styles.container}>
      <div className={styles.plantContainer}>
        <h2>E sua planta recomendada é <span className="colored">{plant.popular}</span></h2>
        <p className={styles.cientific}><strong className="colored">Nome Científico:</strong> {plant.cientifico}</p>
        <p className={styles.description}><strong className="colored">Descrição:</strong> {plant.descricao}</p>
        <img src={plant.link} alt={plant.popular} />
      </div>
    </section>
  );
};

export default GeneratedPlant;

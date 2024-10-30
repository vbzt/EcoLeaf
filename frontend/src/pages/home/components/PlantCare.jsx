import styles from './PlantCare.module.css'

const PlantCare = () => {
    return (
        <section className={styles.container}>
            <div className="d-flex justify-content-center flex-column">
                <p className= {`text-center text-large ${styles.textLarge}`}>Como Administrar Sua Planta?</p>
            </div>
            <div className="d-flex justify-content-center">
                <span className={styles.linha}></span>
            </div>
            <div className={styles.allDicas}>
                {['Escolha o local ideal.', 'Rega na medida certa.', 'Fertilização', 'Controle de pragas.', 'Podas e limpeza.'].map((title, index) => (
                    <div className={styles.tab} key={index}>
                        <input type="radio" name="acc" id={`acc${index + 1}`} />
                        <label htmlFor={`acc${index + 1}`}>
                            <h2>{`0${index + 1}`}</h2>
                            <h3>{title}</h3>
                        </label>
                        <div className={styles.content}>
                            <p>
                                {[
                                    'Coloque suas plantas em um local que receba a luz adequada, levando em conta as necessidades específicas de cada espécie. Algumas preferem luz direta, enquanto outras se dão melhor em sombra parcial.',
                                    'Regue suas plantas conforme necessário. Verifique a umidade do solo antes de regar; muitas plantas preferem que o solo seque um pouco entre as regas.',
                                    'Use fertilizantes apropriados durante a época de crescimento (geralmente na primavera e verão) para fornecer os nutrientes que suas plantas precisam.',
                                    'Fique atento a sinais de pragas ou doenças. Inspecione regularmente as folhas e, se necessário, use soluções orgânicas ou produtos específicos para combate.',
                                    'Realize podas regulares para remover folhas mortas ou doentes, ajudando a planta a crescer de forma saudável. Limpe as folhas com um pano úmido para remover poeira e permitir uma melhor fotossíntese.'
                                ][index]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PlantCare;

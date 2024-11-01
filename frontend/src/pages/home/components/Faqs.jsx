import styles from './Faqs.module.css';

const Faqs = () => {
    return (
        <section className={` articleFaqs`}>
            <p className={`text-center text-large ${styles.textLarge}`}>FAQ's</p>
            <div className="d-flex justify-content-center">
                <span className={styles.linha}></span>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Por que escolher a EcoLeaf?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className={`accordion-body ${styles.accordionBody}`}>
                            <p>
                                Somos uma <strong>empresa</strong> que <strong>vende</strong>, <strong>instala</strong> e <strong>verifica painéis solares</strong> e <strong>sistemas de coleta de água da
                                    chuva</strong>. Além disso, <strong>8% de todas as vendas</strong> vão para uma
                                <strong>ONG de preservação ambiental</strong> chamada <strong>WWF Brasil</strong>. Ao
                                escolher a EcoLeaf, você não apenas investe em <strong>soluções sustentáveis</strong>,
                                mas também contribui para a proteção do meio ambiente.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Quais são as vantagens de usar Painéis Solares como fonte de energia?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className={`accordion-body ${styles.accordionBody}`}>
                            <p>
                                Os <strong>painéis solares</strong> representam uma solução <strong>inovadora</strong> e
                                <strong>sustentável</strong> para a <strong>geração de energia</strong>, aproveitando a
                                <strong>luz do sol</strong>, uma fonte <strong>inesgotável e renovável</strong>. Além de
                                reduzir significativamente os <strong>custos com eletricidade</strong> após o
                                investimento inicial, eles contribuem para a diminuição da <strong>poluição</strong>,
                                uma vez que não emitem <strong>gases de efeito estufa</strong> durante sua operação. A
                                instalação de <strong>sistemas solares</strong> também promove a
                                <strong>autossuficiência energética</strong>, permitindo que residências e empresas
                                gerem sua própria eletricidade, o que se traduz em maior <strong>segurança
                                    energética</strong> e menor <strong>dependência de redes elétricas</strong>. Com
                                <strong>incentivos fiscais</strong> disponíveis em muitos lugares e a
                                <strong>valorização dos imóveis</strong> que adotam essa tecnologia, os <strong>painéis
                                    solares</strong> se consolidam como uma alternativa viável e atraente para um
                                <strong>futuro mais sustentável</strong>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Quais são as vantagens de usar Sistemas de Coleta de Água da Chuva?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className={`accordion-body ${styles.accordionBody}`}>
                            <p>
                                As <strong>vantagens de usar Sistemas de Coleta de Água da Chuva</strong> são diversas e
                                significativas. Em primeiro lugar, eles promovem a <strong>sustentabilidade</strong>,
                                permitindo o aproveitamento de uma <strong>fonte de água natural</strong> e renovável.
                                Isso reduz a <strong>dependência de fontes tradicionais de água</strong>, como a rede
                                pública, contribuindo para a <strong>conservação dos recursos hídricos</strong>. Além
                                disso, a coleta de água da chuva pode resultar em <strong>economia financeira</strong>,
                                já que diminui os custos com o abastecimento de água potável. Outro benefício importante
                                é a <strong>redução do escoamento superficial</strong>, o que ajuda a prevenir
                                <strong>inundações</strong> e a <strong>erosão do solo</strong>. Por fim, esses sistemas
                                podem ser facilmente integrados a <strong>projetos paisagísticos</strong>, promovendo
                                uma gestão mais eficiente da água em residências e comunidades.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className={`accordion-button collapsed ${styles.accordionButton}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            É muito caro ter Painéis Solares ou Sistemas de Coleta de Água da Chuva em casa?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse mb-3" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className={`accordion-body ${styles.accordionBody}`}>
                            <p>
                                Os preços podem variar bastante, mas em média, a instalação de <strong>painéis
                                    solares</strong> pode custar entre <strong>R$ 15.000 a R$ 30.000</strong>,
                                dependendo do tamanho do sistema e da complexidade da instalação. Contudo, é importante
                                lembrar que esse investimento pode ser recuperado em até <strong>5 a 7 anos</strong>
                                através da economia na conta de energia elétrica. Além disso, existem <strong>incentivos
                                    fiscais</strong> e financiamentos que podem ajudar a tornar o custo mais
                                acessível.<br />
                                Para os <strong>sistemas de coleta de água da chuva</strong>, o custo médio gira em
                                torno de <strong>R$ 5.000 a R$ 10.000</strong>, dependendo da capacidade do sistema e da
                                necessidade de instalação de cisternas e tubulações. Esses sistemas podem resultar em
                                uma economia significativa na conta de água, especialmente em regiões com períodos de
                                seca.<br />
                                Portanto, embora o investimento inicial possa parecer alto, os benefícios a longo prazo
                                em termos de economia e sustentabilidade fazem dessa uma escolha viável e inteligente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faqs;

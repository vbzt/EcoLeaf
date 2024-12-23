import img from '../../../../assets/images/ia/page4.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page4 = ({ nextStage, onResponse }) => {
  const question = "Você é uma pessoa que tem tempo para regar sua planta?";
  const options = [
    { value: "alto", label: "Sim, tenho todo tempo do mundo" },
    { value: "medio", label: "Tenho um minutinho livre no dia" },
    { value: "baixo", label: "Não consigo parar nem pra comer" },
  ];
  const progress = [
    { label: "Local", complete: true },
    { label: "Experiência", complete: true },
    { label: "Pets", complete: true },
    { label: "Rega", complete: true },
    { label: "Clima", complete: false },
    { label: "Humidade", complete: false },
  ];

  return (
    <QuestionPage 
      imgSrc={img}
      question={question}
      options={options}
      progress={progress}
      nextStage={nextStage}
      onResponse={onResponse}
    />
  );
};

export default Page4

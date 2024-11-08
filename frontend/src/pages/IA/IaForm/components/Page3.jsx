import img from '../../../../assets/images/ia/page3.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page3 = ({ nextStage, onResponse }) => {
  const question = "Você é uma pessoa que tem tempo para regar sua planta?";
  const options = [
    { value: "high", label: "Sim, tenho todo tempo do mundo" },
    { value: "moderate", label: "Tenho um minutinho livre no dia" },
    { value: "low", label: "Não consigo parar nem pra comer" },
    { value: "skip", label: "Pular questão" },
  ];
  const progress = [
    { label: "Experiência", complete: true },
    { label: "Pets", complete: true },
    { label: "Rega", complete: true },
    { label: "Luz solar", complete: false },
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

export default Page3;

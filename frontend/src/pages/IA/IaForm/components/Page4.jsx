import img from '../../../../assets/images/ia/page4.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page4 = ({ nextStage, onResponse }) => {
  const question = "Quanta luz solar a planta poderá receber?";
  const options = [
    { value: "high", label: "Ela estará o tempo todo no sol" },
    { value: "moderate", label: "Ela receberá de tempos em tempos" },
    { value: "low", label: "Luz solar? O que é isso?" },
    { value: "skip", label: "Pular questão" },
  ];
  const progress = [
    { label: "Experiência", complete: true },
    { label: "Pets", complete: true },
    { label: "Rega", complete: true },
    { label: "Luz solar", complete: true },
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

export default Page4;

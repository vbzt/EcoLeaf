import img from '../../../../assets/images/ia/page5.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page5 = ({ nextStage, onResponse }) => {
  const question = "Quanta luz solar a planta poderá receber?";
  const options = [
    { value: "high", label: "Ela estará o tempo todo no sol" },
    { value: "moderate", label: "Ela receberá de tempos em tempos" },
    { value: "low", label: "Luz solar? O que é isso?" },
  ];
  const progress = [
    { label: "Local", complete: true },
    { label: "Experiência", complete: true },
    { label: "Pets", complete: true },
    { label: "Rega", complete: true },
    { label: "Clima", complete: true },
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

export default Page5

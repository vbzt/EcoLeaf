import img from '../../../../assets/images/ia/page6.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page6 = ({ nextStage, onResponse }) => {
  const question = "Qual a úmidade do local?";
  const options = [
    { value: "Úmido", label: "Úmido" },
    { value: "ameno", label: "Ameno" },
    { value: "seco", label: "Seco" },
  ];
  const progress = [
    { label: "Local", complete: true },
    { label: "Experiência", complete: true },
    { label: "Pets", complete: true },
    { label: "Rega", complete: true },
    { label: "Clima", complete: true },
    { label: "Humidade", complete: true },
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

export default Page6

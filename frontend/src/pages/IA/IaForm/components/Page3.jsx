import img from '../../../../assets/images/ia/page3.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page3 = ({ nextStage, onResponse }) => {
  const options = [
    { value: 'tem', label: 'Sim' },
    { value: 'não tem', label: 'Não' },
  ]

  const progress = [
    { name: "Local", complete: true, label: 'Local'},
    { name: 'Experiência', complete: true, label: 'Experiência' },
    { name: 'Pets', complete: true, label: 'Pets' },
    { name: 'Rega', complete: false, label: 'Rega' },
    { name: 'Clima', complete: false, label: 'Luz solar' },
    { label: "Humidade", complete: false},
  ]

  return (
    <>
      <QuestionPage
        imgSrc={img}
        question="Você tem pets que poderiam comer a planta?"
        options={options}
        nextStage={nextStage}
        onResponse={onResponse}
        progress={progress}
      />
    </>
  )
}

export default Page3

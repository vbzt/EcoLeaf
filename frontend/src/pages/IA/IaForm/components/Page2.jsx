import img from '../../../../assets/images/ia/page2.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page2 = ({ nextStage, onResponse }) => {
  const options = [
    { value: 'yes', label: 'Sim' },
    { value: 'no', label: 'Não' },
    { value: 'skip', label: 'Pular questão' },
  ]

  const progress = [
    { name: 'exp', complete: true, label: 'Experiência' },
    { name: 'pets', complete: true, label: 'Pets' },
    { name: 'water', complete: false, label: 'Rega' },
    { name: 'sun', complete: false, label: 'Luz solar' },
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

export default Page2

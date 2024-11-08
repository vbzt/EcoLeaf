import img from '../../../../assets/images/ia/page1.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page1 = ({ nextStage, onResponse }) => {
  const options = [
    { value: 'high', label: 'Sou basicamente um botânico expert' },
    { value: 'moderate', label: 'Consigo manter algumas plantas vivas...' },
    { value: 'low', label: 'Nunca cuidei nem de plantas de plástico' },
    { value: 'skip', label: 'Pular questão' },
  ]

  const progress = [
    { name: 'exp', complete: true, label: 'Experiência' },
    { name: 'pets', complete: false, label: 'Pets' },
    { name: 'water', complete: false, label: 'Rega' },
    { name: 'sun', complete: false, label: 'Luz solar' },
  ]

  return (
    <>
      <QuestionPage
        question="Quanta experiência você tem com plantas?"
        imgSrc={img}
        options={options}
        nextStage={nextStage}
        onResponse={onResponse}
        progress={progress}
      />
    </>
  )
}

export default Page1

import img from '../../../../assets/images/ia/page2.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page2 = ({ nextStage, onResponse }) => {
  const options = [
    { value: 'alta', label: 'Sou basicamente um botânico expert' },
    { value: 'media', label: 'Consigo manter algumas plantas vivas...' },
    { value: 'baixa', label: 'Nunca cuidei nem de plantas de plástico' },
  ]

  const progress = [
    { name: "Local", complete: true, label: 'Local'},
    { name: 'Experiência', complete: true, label: 'Experiência'},
    { name: 'Pets', complete: false, label: 'Pets' },
    { name: 'Regas', complete: false, label: 'Rega' },
    { name: 'Clima', complete: false, label: 'Luz solar' },
    { label: "Humidade", complete: false },
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

export default Page2

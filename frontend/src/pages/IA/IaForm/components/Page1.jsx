import img from '../../../../assets/images/ia/page1.png'
import QuestionPage from '../../../../components/layouts/IA/QuestionPage'

const Page1 = ({ nextStage, onResponse }) => {
  const options = [
    { value: 'casa', label: 'Moro em uma casa' },
    { value: 'apartamento', label: 'Moro em um apartamento' },
    { value: 'sítio', label: 'Moro em um lugar aberto, como sítio ou chácaras' },
  ]

  const progress = [
    { name: "Local", complete: true, label: 'Local'},
    { name: 'Experiência', complete: false, label: 'Experiência'},
    { name: 'Pets', complete: false, label: 'Pets' },
    { name: 'Regas', complete: false, label: 'Rega' },
    { name: 'Clima', complete: false, label: 'Luz solar' },
    { label: "Humidade", complete: false },
  ]

  return (
    <>
      <QuestionPage
        question="Qual o seu tipo de moradia?"
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

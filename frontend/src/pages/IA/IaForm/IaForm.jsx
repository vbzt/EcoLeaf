import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import { useState } from 'react'

import styles from './IaForm.module.css'

const stages = [
  { id: 1, name: 'page1' },
  { id: 2, name: 'page2' },
  { id: 3, name: 'page3' },
  { id: 4, name: 'page4' },
  { id: 5, name: 'treatData' },
]

const IaForm = () => {
  const [stage, setStage] = useState(1)
  const [responses, setResponses] = useState({
    experience: '',
    pets: '',
    watering: '',
    sunlight: '',
  })

  const nextStage = () => {
    setStage((currentStage) => (currentStage % stages.length) + 1)
    console.log(responses)
  }

  const handleResponse = (key, value) => {
    setResponses((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className= {styles.container}>
      {stage === 1 && <Page1 nextStage={nextStage} onResponse={(value) => handleResponse('experience', value)} />}
      {stage === 2 && <Page2 nextStage={nextStage} onResponse={(value) => handleResponse('pets', value)} />}
      {stage === 3 && <Page3 nextStage={nextStage} onResponse={(value) => handleResponse('watering', value)} />}
      {stage === 4 && <Page4 nextStage={nextStage} onResponse={(value) => handleResponse('sunlight', value)} />}
      {stage === 5 && <TratarDados nextStage={nextStage} responses={responses} />}
    </section>
  )
}

export default IaForm

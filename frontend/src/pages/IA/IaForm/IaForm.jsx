import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import styles from './IaForm.module.css'

const stages = [
  { id: 1, name: 'page1' },
  { id: 2, name: 'page2' },
  { id: 3, name: 'page3' },
  { id: 4, name: 'page4' },
  { id: 5, name: 'page5' },
  { id: 6, name: 'page6' },
  { id: 7, name: 'generatedPlant' },
]

const IaForm = () => {
  const [stage, setStage] = useState(1)
  const navigate = useNavigate()
  const [responses, setResponses] = useState({
    local: '',
    experience: '',
    pets: '',
    watering: '',
    climate: '',
    humidity: '',
  })

  useEffect(() => {
    console.log(responses)
  }, [responses])

  const nextStage = () => {
    setStage((currentStage) => (currentStage % stages.length) + 1)
  }

  const handleResponse = (key, value) => {
    setResponses((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    if (stage === 7) {
      navigate('/ia/generatedPlant', { state: { plantsData: responses } })
    }
  }, [stage, navigate, responses]) 

  return (
    <section className={styles.container}>
      {stage === 1 && <Page1 nextStage={nextStage} onResponse={(value) => handleResponse('local', value)} />}
      {stage === 2 && <Page2 nextStage={nextStage} onResponse={(value) => handleResponse('experience', value)} />}
      {stage === 3 && <Page3 nextStage={nextStage} onResponse={(value) => handleResponse('pets', value)} />}
      {stage === 4 && <Page4 nextStage={nextStage} onResponse={(value) => handleResponse('watering', value)} />}
      {stage === 5 && <Page5 nextStage={nextStage} onResponse={(value) => handleResponse('climate', value)} />}
      {stage === 6 && <Page6 nextStage={nextStage} onResponse={(value) => handleResponse('humidity', value)} />}
    </section>
  )
}

export default IaForm
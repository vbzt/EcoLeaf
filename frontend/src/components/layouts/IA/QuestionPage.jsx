import { useState } from 'react'
import styles from './Pages.module.css'

const QuestionPage = ({ question, options, nextStage, onResponse, progress, imgSrc }) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (e) => {
    const value = e.target.value
    setSelectedOption(value)
    onResponse(value)
    nextStage()
  }

  return (
    <>
    <div className={styles.survey}>
      <div className={styles.progress}>
        {progress.map((step, index) => (
          <div key={index} className={`${styles[step.name]} ${styles.step}`}>
            <div className={`${styles.ball} ${step.complete ? styles.complete : ''}`}>
              <i className="fa-solid fa-check"></i>
            </div>
            <p>{step.label}</p>
          </div>
        ))}
      </div>
      <div className={styles.question}>
        <h1>{question}</h1>
        <form>
          {options.map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
              />
              <span className={styles.pl2}>{option.label}</span>
            </label>
          ))}
        </form>
      </div>
    </div>
      <div className= {styles.img}>
        <img src= {imgSrc} />
      </div>
    </>
  )
}

export default QuestionPage

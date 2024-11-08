import './Pages.css';

const TratarDados = ({ responses, nextStage }) => {
  return (
    <div className='dataTreatment'>
      <h2>Tratar dados backend</h2>
      <div>
        {Object.entries(responses).map(([key, value]) => (
          <span key={key}>{key}: {value}</span>
        ))}
      </div>
      <button onClick={nextStage} type="button">Voltar</button>
    </div>
  );
};

export default TratarDados;

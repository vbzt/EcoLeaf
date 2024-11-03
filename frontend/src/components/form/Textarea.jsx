import styles from './Input.module.css';

const Textarea = ({ label, name, placeholder, handleOnChange, value, required }) => {
  return (
    <div className={`${styles.formGroup} mb-3`}>
      <label htmlFor={name} className="form-label">{label}:</label>
      <textarea 
        id={name} 
        name={name} 
        className={`${styles.inputForm} form-control mt-1`} 
        placeholder={placeholder} 
        onChange={handleOnChange} 
        value={value}
        required={required}
      />
    </div>
  );
};

export default Textarea;
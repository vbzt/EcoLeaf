import React, { forwardRef } from 'react'
import styles from './Input.module.css'

const Input = forwardRef(({ type, label, name, placeholder, handleOnChange, value, required, accept }, ref) => {
  return (
    <div className={`${styles.formGroup} mb-3`}>
      <label htmlFor={name} className="form-label">{label}:</label>
      <input 
        type={type} 
        id={name} 
        name={name} 
        className={`${styles.inputForm} form-control mt-1`} 
        placeholder={placeholder} 
        onChange={handleOnChange} 
        value={value}
        required={required}
        accept={type === 'file' ? 'image/png, image/jpeg' : undefined}
        ref={ref}
      />
    </div>
  )
})

export default Input

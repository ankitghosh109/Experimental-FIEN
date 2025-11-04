import React, { useState } from 'react'
import styles from "../../styles/uiCss/ListField.module.css"
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListField({id, about, error, required, label, type, name ,value, onChange }) {

const [IsFocused, setIsFocused] = useState(false) 
  
  return (
    <>
      <div className={styles.FieldContainer}>
        <div className={styles.labelContainer}>
            <label htmlFor={id}>{label}
                {required ? <span className={styles.required}>*</span> : ""}
            </label>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <input id={id} value={value} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} onChange={onChange} maxLength="999" required={required} autoComplete='username webauthn' autoCapitalize='none' autoCorrect='off' spellCheck="false" name={name} type={type} onInvalid={(e) => e.preventDefault()}  />
          </div>
          {error ? <div className={styles.helperTextContainer}>
            <FontAwesomeIcon icon={faCircleExclamation} height={16} width={16}/>
            <div className={styles.message}>{error}</div>
          </div>: ""}
        </div>
      </div>
      {about ? <div className={styles.aboutInput} 
      style={{
        height: "18px",
        marginTop: IsFocused? "8px" : "20px",
        marginBottom: IsFocused? "0px" : "-38px", 
        opacity: IsFocused ? 1 : 0}}>
        {about}
      </div> : ""}
    </>
  )
}

export default ListField
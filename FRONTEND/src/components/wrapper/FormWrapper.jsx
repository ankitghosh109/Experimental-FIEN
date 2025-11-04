import React from 'react'
import styles from "../../styles/wrapperCss/FormWrapper.module.css"
import artwork from "../../assets/images/bg/artwork.svg"

function FormWrapper({children}) {
  return (
    <div className={styles.pageContainer}>
            <img className={styles.artwork} src={artwork} alt="" />
            <div className={styles.formWrapper}>
                <div className={styles.animatedDiv}>
                    {children}
                </div>
            </div>
        </div>
  )
}

export default FormWrapper
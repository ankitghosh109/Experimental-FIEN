import { useContext } from "react"
import styles from "../../../styles/uiCss/selectorsCss/DobSelector.module.css"
import { RegisterPageContext } from "../../../context/RegisterPageContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { ClickTrapContainerContext } from "../../../context/ClickTrapContainerContext"

function DobSelector({ error }) {
  const { handlePopTraping } = useContext(ClickTrapContainerContext)
  const { registerForm } = useContext(RegisterPageContext)

  return (
    <fieldset className={styles.birthdayInputs}>
      <legend className={`${styles.legend} ${error ? styles.error : ""}`}>
        Date of Birth
        {error ? (
          <span className={styles.errorMessage}> - {error}</span>
        ) : (
          <span className={styles.required}>*</span>
        )}
      </legend>
      <div className={styles.inputs}>
        <div
          className={styles.monthContainer}
          onClick={(e) => handlePopTraping(e, "popoutMonths")}
        >
          <div className={styles.selectionWrapper}>
            <span className={styles.placeholder}>
              {registerForm.date_of_birth.month
                ? registerForm.date_of_birth.month
                : "Month"}
            </span>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
        <div
          className={styles.dayContainer}
          onClick={(e) => handlePopTraping(e, "popoutDays")}
        >
          <div className={styles.selectionWrapper}>
            <span className={styles.placeholder}>
              {registerForm.date_of_birth.day
                ? registerForm.date_of_birth.day
                : "Day"}
            </span>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
        <div
          className={styles.yearContainer}
          onClick={(e) => handlePopTraping(e, "popoutYears")}
        >
          <div className={styles.selectionWrapper}>
            <span className={styles.placeholder}>
              {registerForm.date_of_birth.year
                ? registerForm.date_of_birth.year
                : "Year"}
            </span>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  )
}

export default DobSelector

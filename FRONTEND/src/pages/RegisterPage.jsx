import { useContext } from "react"
import styles from "../styles/pageCss/RegisterPage.module.css"
import ListField from "../components/ui/ListField"
import { RegisterPageContext } from "../context/RegisterPageContext"
import DobSelector from "../components/ui/selectors/DobSelector"
import { useNavigate } from "react-router-dom"

function RegisterPage() {
  const navigate = useNavigate()
  const {
    registerForm,
    handleInputChange,
    handleSubmitRegistrationForm,
    Errors,
    aboutInputValues,
  } = useContext(RegisterPageContext)

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmitRegistrationForm}
      noValidate
    >
      <div className={styles.centeringWrapper}>
        <div className={styles.topHeading}>Create an account</div>
        <div className={styles.body}>
          <ListField
            error={Errors.email}
            required={true}
            id="email"
            label="Email"
            type="text"
            name="email"
            value={registerForm.email}
            onChange={handleInputChange}
          />
          <ListField
            about={aboutInputValues.global_name}
            error={Errors.global_name}
            required={false}
            id="displayName"
            label="Display Name"
            type="text"
            name="global_name"
            value={registerForm.global_name}
            onChange={handleInputChange}
          />
          <ListField
            about={aboutInputValues.username}
            error={Errors.username}
            required={true}
            id="userName"
            label="Username"
            type="text"
            name="username"
            value={registerForm.username}
            onChange={handleInputChange}
          />
          <ListField
            error={Errors.password}
            required={true}
            id="password"
            label="Password"
            type="password"
            name="password"
            value={registerForm.password}
            onChange={handleInputChange}
          />
          <DobSelector error={Errors.date_of_birth} />
          <div className={styles.optionalContainer}>
            <div className={styles.optionalContent}>
              <div className={styles.checkbox}>
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
                  <path
                    fill="white"
                    fillRule="evenodd"
                    d="M19.06 6.94a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.12 0l-4-4a1.5 1.5 0 0 1 2.12-2.12L10 13.88l6.94-6.94a1.5 1.5 0 0 1 2.12 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className={styles.checkboxDescription}>
                (Optional) It’s okay to send me emails with Discord updates,
                tips, and special offers. You can opt out at any time.
              </div>
            </div>
          </div>
          <div className={styles.termsOfService}>
            By clicking “Create Account,” you agree to Discord's{" "}
            <a href="//discord.com/terms" target="_blank">
              Terms of Service
            </a>{" "}
            and have read the{" "}
            <a href="//discord.com/privacy" target="_blank">
              Privacy Policy
            </a>
          </div>
          <button type="submit" className={styles.createAccountButton}>
            <div className={styles.content}>Create Account</div>
          </button>
          <div className={styles.loginContainer}>
            <span>Already have an account?</span>
            <button
              type="button"
              className={styles.loginButton}
              onClick={() => navigate("/login")}
            >
              <div className={styles.content}>Log in</div>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default RegisterPage

import { useContext } from "react"
import ListField from "../components/ui/ListField"
import styles from "../styles/pageCss/LoginPage.module.css"
import { useNavigate } from "react-router-dom"
import { LoginPageContext } from "../context/LoginPageContext"

function LoginPage() {
  const navigate = useNavigate()

  const { handleSubmitLoginForm, handleInputChange, LoginForm, Errors } =
    useContext(LoginPageContext)

  return (
    <form className={styles.form} onSubmit={handleSubmitLoginForm}>
      <div className={styles.centeringWrapper}>
        <div className={styles.mainLoginContainer}>
          <div className={styles.header}>
            <div className={styles.headerPrimary}>Welcome back!</div>
            <div className={styles.headerSecondary}>
              We're so exited to see you again!
            </div>
          </div>
          <div className={styles.body}>
            <ListField
              error={Errors.login}
              required={true}
              id="emailOrPhone"
              label="Email or Phone Number"
              type="text"
              name="login"
              value={LoginForm.login}
              onChange={handleInputChange}
            />
            <ListField
              error={Errors.password}
              required={true}
              id="password"
              label="Password"
              type="password"
              name="password"
              value={LoginForm.password}
              onChange={handleInputChange}
            />
            <button type="button" className={styles.forgotButton}>
              <div className={styles.content}>Forgot your password?</div>
            </button>
            <button type="submit" className={styles.LoginButton}>
              <div className={styles.content}>Log In</div>
            </button>
            <div className={styles.registerContainer}>
              <span>Need an account?</span>
              <button
                type="button"
                className={styles.registerButton}
                onClick={() => navigate("/register")}
              >
                <div className={styles.content}>Register</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.qrLogin}>
          <div className={styles.qrLoginInner}>
            <div className={styles.qrCode}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="160"
                viewBox="0 0 160 160"
                role="img"
                aria-label="QR code for https://www.discord.com"
              >
                <title>QR code for https://www.discord.com</title>
                <image
                  href="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://www.discord.com&format=svg"
                  width="160"
                  height="160"
                  preserveAspectRatio="xMidYMid meet"
                />
              </svg>
            </div>
          </div>
          <div className={styles.qrHeading}>Log in with QR Code</div>
          <div className={styles.qrSubtext}>
            Scan this with the
            <strong> Discord mobile app </strong>
            to log in instantly.
          </div>
          <button className={styles.signinWithKeyButton}>
            <div className={styles.content}>Or sign in with passkey</div>
          </button>
        </div>
      </div>
    </form>
  )
}

export default LoginPage

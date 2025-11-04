import { Outlet } from "react-router-dom"
import styles from "../styles/pageCss/StartUpPage.module.css"
import SvgStatusMasks from "../components/svg/SvgStatusMasks"
import ClickTrapContainer from "../components/ClickTrapContainer/ClickTrapContainer"

function StartUpPage() {
  return (
    <>
        <SvgStatusMasks />
      <div className={styles.App}>
        <div className={styles.pageContainer}>
          <Outlet />
        </div>
      </div>
      <div className={styles.layerContainer}>
        <ClickTrapContainer/>
      </div>
    </>
  )
}

export default StartUpPage

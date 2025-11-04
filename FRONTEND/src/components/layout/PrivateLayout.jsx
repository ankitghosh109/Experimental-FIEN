import React, { useState } from 'react'
import PrivateSidebar from './PrivateSidebar'
import styles from "../../styles/layoutCss/PrivateLayout.module.css"
import UserPanel from '../ui/UserPanel'
import PrivateMainContent from './PrivateMainContent'

function PrivateLayout() {
  const [sidebarWidth, setSidebarWidth] = useState(300)
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.listingSide} style={{width: sidebarWidth + 72}}>
          <div className={styles.serverList}></div>
          <PrivateSidebar sidebarWidth={sidebarWidth} setSidebarWidth={setSidebarWidth}/>
          <UserPanel/>
      </div>
      <PrivateMainContent/>
    </div>
  )
}

export default PrivateLayout
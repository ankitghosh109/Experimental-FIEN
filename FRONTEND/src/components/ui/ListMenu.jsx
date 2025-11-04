import React from 'react'
import styles from "../../styles/uiCss/ListMenu.module.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'

function ListMenu({path, icon ,text}) {
  return (
          <NavLink end to={path} className={({isActive}) => isActive ? `${styles.menuButton} ${styles.active}` : `${styles.menuButton}`}>
            <div className={styles.menuButtonContent}>
              <div className={styles.menuIcon}>
                  {icon}
              </div>
              <div className={styles.menuText}>
                {text}
              </div>
            </div>
          </NavLink>
  )
}

export default ListMenu
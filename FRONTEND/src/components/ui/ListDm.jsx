import styles from "../../styles/uiCss/ListDm.module.css"
import { NavLink } from 'react-router-dom'
import { useState } from "react"

function ListDm({avatar,displayName,status = "offline"}) {
const [isHovering, setIsHovering] =useState(false)

let statusColor = "#82838b"
let statusMaskId = `url(#mask-status-${status})`

switch (status) {
  case "online": statusColor = "#43a25a"
    
    break;
  case "offline": statusColor = "#82838b"
    break;
  case "idle": statusColor = "#ca9654"
    break;
  case "dnd": statusColor = "#d83a42"
    break;

  default:
    break;
}

  return <>
  <li className={styles.ListItem} onPointerEnter={() => setIsHovering(true)} onPointerLeave={() => setIsHovering(false)}>
    <div className={styles.interactive}>

      <NavLink to="/channels/@me/id" className={styles.link}>
      <div className={styles.layout}>
        <div className={styles.avatar}>
          <div className={styles.wrapper}>
            <svg width="40" height="40" viewBox="0 0 40 40">
                <mask id=":rp5:" width="32" height="32">
                    <circle cx="16" cy="16" r="16" fill="white"></circle>
                    <rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect>
                </mask>
                <foreignObject x="0" y="0" width="32" height="32" mask="url(#:rp5:)">
                  <div >
                    <img alt=" "  src={avatar}/>
                  </div>
                </foreignObject>
                <rect width="10" height="10" x="22" y="22" fill={statusColor} mask={statusMaskId} ></rect>
            </svg>
          </div>
        </div>
        <div className={styles.content}>
            <div className={styles.nameAndDecorators}>
              <div className={styles.nameContainer}>
                <div className={styles.name}>{displayName}</div>
              </div>
            </div>
        </div>
      </div>
      </NavLink>
      <div className={styles.iconContainer}>
          {isHovering?  <div className={styles.closeButton}>
            <svg className={styles.closeIcon} width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z"></path>
            </svg>
          </div> : ""}
      </div>
    </div>
  </li>
  </>
}

export default ListDm
import React, { useState } from 'react'
import styles from "../../styles/uiCss/UserPanel.module.css"
import kakashi from "../../assets/images/avatars/kakashi.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEarListen, faGear, faMicrophone } from "@fortawesome/free-solid-svg-icons";



function UserPanel() {
const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={styles.UserPanel} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)}>
        <div className={styles.container}>
            <div className={styles.avatarWrapper}>
                <div className={styles.avatar}>
                    <svg className={styles.mask} width="40" height="40" viewBox="0 0 40 40">
                        <mask id=":avtarMask:" width="32" height="32">
                            <circle cx="16" cy="16" r="16" fill="white"></circle>
                            <rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect>
                        </mask>
                        <foreignObject x="0" y="0" width="32" height="32" mask="url(#:avtarMask:)">
                            <img src={kakashi} alt="" />
                        </foreignObject>
                        <rect width="10" height="10" x="22" y="22" fill="#82838b" mask="url(#mask-status-offline)" ></rect>
                    </svg>
                </div>
                <div className={styles.nameTag}>
                    <div className={styles.panelTitle}>
                        <div className={styles.title}>nj8235</div>
                        <div className={styles.panelSubtextContainer}>
                            <div className={`${styles.subtext} ${isHovered && styles.forceHover}`}>
                                <div className={`${styles.hoverRollText}  `}>
                                    <div className={styles.hovered}>nj8235</div>
                                </div>
                                <div className={`${styles.defaultText}`}>
                                    <div className={`${styles.animatedText}`} >Invisible</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.micButtonParent}>
                    <button className={styles.micButton}  >
                        <div className={styles.micIconContainer} >
                            <FontAwesomeIcon icon={faMicrophone} />
                            {/* <FontAwesomeIcon icon={faMicrophoneSlash} /> */}
                        </div>
                    </button>
                </div>
                <div className={styles.deafenButtonParent}>
                    <button className={styles.deafenButton} >
                        <div className={styles.deafenIconContainer}>
                            <FontAwesomeIcon icon={faEarListen} />
                            {/* <FontAwesomeIcon icon={faEarDeaf} /> */}
                        </div>
                    </button>
                </div>
                <div className={styles.userSettings}>
                    <button className={styles.userSettingsButton}>
                        <div className={styles.userSettingsIconContainer} >
                            <FontAwesomeIcon icon={faGear} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserPanel
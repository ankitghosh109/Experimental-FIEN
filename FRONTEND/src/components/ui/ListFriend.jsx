import { useContext, useState } from "react"
import styles from "../../styles/uiCss/ListFriend.module.css"
import kakashi from "../../assets/images/avatars/kakashi.webp"
import zenitsu from "../../assets/images/avatars/zenitsu.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faComment,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons"
import { ClickTrapContainerContext } from "../../context/ClickTrapContainerContext"

function ListFriend() {
  const [isHovered, setIsHovered] = useState(false)

  const { handleMenuTrapping } = useContext(ClickTrapContainerContext)

  return (
    <div
      className={styles.ListFriendContainer}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onContextMenu={(e) => handleMenuTrapping(e, "contextMenu")}
    >
      <div className={styles.ListFriendContent}>
        <div
          className={`${styles.userInfo} ${isHovered ? styles.hovered : ""}`}
        >
          <div className={styles.avatar}>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <mask id=":avtarMask:" width="32" height="32">
                <circle cx="16" cy="16" r="16" fill="white"></circle>
                <rect
                  color="black"
                  x="19"
                  y="19"
                  width="16"
                  height="16"
                  rx="8"
                  ry="8"
                ></rect>
              </mask>
              <foreignObject
                mask="url(#:avtarMask:)"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <img src={zenitsu} alt="avatar" />
              </foreignObject>
              <rect
                width="10"
                height="10"
                x="22"
                y="22"
                fill="#ca9654"
                mask="url(#mask-status-idle)"
              ></rect>
            </svg>
          </div>
          <div className={styles.text}>
            <div className={styles.Tag}>
              <span className={styles.username}>zenitsu</span>
              <span className={styles.discriminator}>nj8235</span>
            </div>
            <div className={styles.subtext}>
              <div className={styles.statusText}>Idle</div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.messageOption}>
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div
            className={styles.moreOption}
            onClick={(e) => handleMenuTrapping(e, "moreOption")}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListFriend

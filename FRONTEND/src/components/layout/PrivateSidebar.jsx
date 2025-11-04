// UserLayout.jsx
import styles from "../../styles/layoutCss/PrivateSidebar.module.css"
import ListDm from "../ui/ListDm"

import kakashi from "../../assets/images/avatars/kakashi.webp"
import Resizer from "../ui/Resizer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink, useOutletContext } from "react-router-dom"
import { faPlus, faShop, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import ListMenu from "../ui/listMenu"

function PrivateSidebar({ sidebarWidth, setSidebarWidth }) {
  // const { sidebarWidth, setSidebarWidth } = useOutletContext()

  return (
    <div
      className={`${styles.sidebarList} ${styles.outline}`}
      style={{ width: `${sidebarWidth}px` }}
    >
      <Resizer setSidebarWidth={setSidebarWidth} />

      <div className={styles.topicContainer}>
        <div className={styles.topicIconContainer}>
          <div className={styles.topicIcon}>
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
        </div>
        <div className={styles.topicName}>Friendssssssssssssssssssssssssssssssssssssssssssssss</div>
      </div>

      <div className={styles.topicSeprator}></div>

      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <div className={styles.searchBarContent}>Find or start a conversation</div>
        </div>
      </div>
      <div className={styles.searchBarSeprator}></div>

      <div className={styles.scroller}>
        <div style={{ height: "8px" }}></div>
        <div className={styles.menuOptionContainer}>
          <ListMenu path={"/channels/@me"} text={"Friends"} icon={<FontAwesomeIcon icon={faUserGroup} />}/>
          <ListMenu path={"/channels/shop"} text={"Shop"} icon={<FontAwesomeIcon icon={faShop} />}/>
        </div>

        <div className={styles.sectionDivider}></div>

        <div className={styles.directMessages}>
          <div className={styles.headerText}>Direct Messages</div>
          <div className={styles.createDmIcon}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>

        <ul className={styles.dmContainer}>
          <ListDm avatar={kakashi} displayName={"kakashiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"} status="online" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="offline" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="idle" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="dnd" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="offline" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="idle" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="dnd" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="offline" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="idle" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="dnd" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="offline" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="idle" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="dnd" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="offline" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="idle" />
          <ListDm avatar={kakashi} displayName={"kakashi"} status="dnd" />
        </ul>
      </div>
    </div>
  )
}

export default PrivateSidebar

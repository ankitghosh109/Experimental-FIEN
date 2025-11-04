import React, { useState } from 'react'
import styles from '../../styles/layoutCss/PrivateMainContent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import ListFriend from '../ui/ListFriend';


function PrivateMainContent() {
  const [inputValue, setInputvalue] = useState("")
  const [activeTab, setActiveTab] = useState("Online")

  function sceletolfilter(params) {
    
  }

  return (
    <main className={styles.mainContent}>
        <section className={styles.navigation}>
          <div className={styles.upperContainer}>
            <div className={styles.children}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faUserGroup} />
              </div>
              <div className={styles.titleWrapper}>
                <div className={styles.title}>Friends</div>
              </div>
              <svg className={styles.dotSeparator}  width="4" height="4" viewBox="0 0 4 4">
                <circle cx="2" cy="2" r="2" fill="currentColor">
                </circle>
              </svg>
              <div className={styles.tabBar}>
                <div className={`${styles.onlineTab} ${activeTab === "Online"?styles.active : ""}`} onClick={() => setActiveTab("Online")}>Online</div>
                <div className={`${styles.allTab} ${activeTab === "All Friends"?styles.active : ""}`} onClick={() => setActiveTab("All Friends")}>All</div>
                <div className={`${styles.PendingTab} ${activeTab === "Sent"? styles.active : ""}`} onClick={() => setActiveTab("Sent")}>Pending</div>
                <div className={`${styles.AddFriendsTab} ${activeTab === "Add Friend"? styles.active : ""}`} onClick={() => setActiveTab("Add Friend")}>Add Friend</div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.tabBody}>
          <div className={styles.peopleColumn}>
            <div className={styles.searchBarContainer}>
              <div className={styles.searchBar}>
                <div className={`${styles.searchBarContent} ${inputValue? styles.hasValue : ""}`}>
                  <div className={styles.searchIcon}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                  <input className={styles.searchInput} type="text" placeholder='Search' onInput={(e) => {e.stopPropagation(); setInputvalue(e.currentTarget.value)}} value={inputValue}/>
                  {inputValue ? <div className={styles.clearButton} onClick={() => setInputvalue("")}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </div> : ""}
                </div>
              </div>
            </div>
            <div className={styles.peopleList}>
              <div className={styles.content}>
                <div className={styles.sectionTitleContiner}>
                  <div className={styles.sectionTitle}>{activeTab} — 6</div>
                </div>
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
                <ListFriend/> 
              </div>
            </div>
          </div>
          <div className={styles.nowPlayingColumn}></div>
        </div>
    </main>
  )
}

export default PrivateMainContent
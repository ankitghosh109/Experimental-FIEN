import { useContext, useLayoutEffect, useRef, useState } from "react"
import styles from "../../styles/ClickTrapContainerCss/ClickTrapContainer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ClickTrapContainerContext } from "../../context/ClickTrapContainerContext"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { RegisterPageContext } from "../../context/RegisterPageContext"

// we successsssFullyyyy applyied multi-level nested dropdown/contextMenu it took me five or more dayes to do it every day i faced a new problem when i am applying it and i learned a lot from making it it isss very complex but remember never give up just try to do it just tryyyyy and learnnnnn
function ClickTrapContainer() {
  const [hoveredPath, setHoveredPath] = useState("")
  const [Cords, setCords] = useState({ left: 0, top: 0 })

  const menuRef = useRef(null)
  const parentItemRef = useRef({}) // For parent menu items
  const submenuRef = useRef({}) // For submenu containers
  const popoutRef = useRef(null)

  const { handleDobChange } = useContext(RegisterPageContext)

  const {
    ShowContextMenu,
    contextMenu,
    moreOption,
    popoutMonths,
    popoutDays,
    popoutYears,
    ShowPopout,
    handleCloseTrap,
    handleResize,
  } = useContext(ClickTrapContainerContext)
  const { toShow, pointerX, pointerY } = ShowContextMenu

  let menuList =
    toShow === "moreOption"
      ? moreOption
      : toShow === "contextMenu"
      ? contextMenu
      : undefined
  const { toPop, bottom, left, width, maxHeight } = ShowPopout
  let popoutList =
    toPop === "popoutMonths"
      ? popoutMonths
      : toPop === "popoutDays"
      ? popoutDays
      : toPop === "popoutYears"
      ? popoutYears
      : undefined

  useLayoutEffect(() => {
    if (
      (toShow === "moreOption" || toShow === "contextMenu") &&
      menuRef.current
    ) {
      const menu = menuRef.current
      const menuWidth = menu.offsetWidth
      const menuHeight = menu.offsetHeight
      const screenW = window.innerWidth
      const screenH = window.innerHeight

      let left = pointerX
      let top = pointerY

      if (left + menuWidth > screenW) {
        left = pointerX - menuWidth
      }

      if (top + menuHeight > screenH) {
        top = screenH - (menuHeight + 12)
      }

      setCords({ left, top })
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [toShow, pointerX, pointerY])

  useLayoutEffect(() => {
    if (!hoveredPath) return

    // Position all active submenus in the current path
    const parts = hoveredPath.split("-")

    for (let i = 0; i < parts.length; i++) {
      const currentPath = parts.slice(0, i + 1).join("-")
      const parentElement = parentItemRef.current[currentPath]
      const currentSubmenu = submenuRef.current[currentPath]

      if (!parentElement || !currentSubmenu) continue

      const parentRect = parentElement.getBoundingClientRect()
      const submenuRect = currentSubmenu.getBoundingClientRect()
      const screenW = window.innerWidth
      const screenH = window.innerHeight

      // Default: show to the right
      let left = parentRect.right
      let top = parentRect.top

      // Check if submenu would overflow on the right
      if (left + submenuRect.width > screenW) {
        // Show to the left instead
        left = parentRect.left - (submenuRect.width + 6)
      }

      // Check if submenu would overflow on the bottom
      if (top + submenuRect.height > screenH) {
        // Align to bottom of screen
        top = screenH - submenuRect.height - 12
      }

      // Ensure submenu doesn't go above screen
      if (top < 0) {
        top = 12
      }

      currentSubmenu.style.position = "fixed"
      currentSubmenu.style.left = `${left + 4}px`
      currentSubmenu.style.top = `${top}px`
    }
  }, [hoveredPath])

  function renderSubmenu(submenuList, parentPath) {
    return (
      <div
        ref={(el) => {
          if (el) {
            submenuRef.current[parentPath] = el
            // Trigger positioning after render
            setTimeout(() => {
              const parentElement = parentItemRef.current[parentPath]
              if (!parentElement || !el) return

              const parentRect = parentElement.getBoundingClientRect()
              const submenuRect = el.getBoundingClientRect()
              const screenW = window.innerWidth
              const screenH = window.innerHeight

              let left = parentRect.right
              let top = parentRect.top

              if (left + submenuRect.width > screenW) {
                left = parentRect.left - (submenuRect.width + 6)
              }

              if (top + submenuRect.height > screenH) {
                top = screenH - submenuRect.height - 12
              }

              if (top < 0) {
                top = 12
              }

              el.style.position = "fixed"
              el.style.left = `${left + 4}px`
              el.style.top = `${top}px`
            }, 0)
          }
        }}
        className={styles.contextMenu}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className={styles.submenuPaddingContainer}>
          <div className={styles.menu}>
            <div className={styles.scroller}>
              {submenuList.map((menuItem, index) => {
                const currentPath = `${parentPath}-${index}`

                if (menuItem.label) {
                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el && menuItem.extraInfo === "hasSubmenu") {
                          parentItemRef.current[currentPath] = el
                        }
                      }}
                      className={`${styles.menuItem} ${
                        menuItem.extraInfo === "danger"
                          ? styles.colorDanger
                          : ""
                      } ${
                        hoveredPath.startsWith(currentPath)
                          ? styles.focused
                          : ""
                      }`}
                      onPointerEnter={() => setHoveredPath(currentPath)}
                    >
                      <div className={styles.label}>
                        {menuItem.label}
                        {menuItem.subtext ? (
                          <div className={styles.subtext}>
                            {menuItem.subtext}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      {menuItem.extraInfo === "hasSubmenu" ? (
                        <div className={styles.iconContainer}>
                          <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                      ) : (
                        ""
                      )}
                      {hoveredPath.startsWith(currentPath) &&
                      menuItem.extraInfo === "hasSubmenu" &&
                      menuItem.submenu
                        ? renderSubmenu(menuItem.submenu, currentPath)
                        : ""}
                    </div>
                  )
                }
                if (menuItem.extraInfo === "separator") {
                  return <div key={index} className={styles.separator}></div>
                }
                return null
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {(toShow === "moreOption" || toShow === "contextMenu") && (
        <div
          className={`${styles.clickTrapContainer} ${styles.trap}`}
          onClick={(e) => handleCloseTrap(e, menuRef, popoutRef)}
          onContextMenu={(e) => handleCloseTrap(e, menuRef, popoutRef)}
        >
          <div
            ref={menuRef}
            className={styles.contextMenu}
            style={{
              position: "absolute",
              left: `${Cords.left}px`,
              top: `${Cords.top}px`,
            }}
            onPointerLeave={() => setHoveredPath("")}
          >
            <div className={styles.menu}>
              <div className={styles.scroller}>
                {menuList.map((menuItem, index) => {
                  if (menuItem.label) {
                    return (
                      <div
                        ref={(el) => {
                          if (el && menuItem.extraInfo === "hasSubmenu") {
                            parentItemRef.current[String(index)] = el
                          }
                        }}
                        key={index}
                        className={`${styles.menuItem} ${
                          menuItem.extraInfo === "danger"
                            ? styles.colorDanger
                            : ""
                        } ${
                          hoveredPath.startsWith(String(index))
                            ? styles.focused
                            : ""
                        }`}
                        onPointerEnter={() => setHoveredPath(String(index))}
                      >
                        <div className={styles.label}>
                          {menuItem.label}
                          {menuItem.subtext ? (
                            <div className={styles.subtext}>
                              {menuItem.subtext}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        {menuItem.extraInfo === "hasSubmenu" ? (
                          <div className={styles.iconContainer}>
                            <FontAwesomeIcon icon={faAngleRight} />
                          </div>
                        ) : (
                          ""
                        )}
                        {hoveredPath.startsWith(String(index)) &&
                        menuItem.extraInfo === "hasSubmenu"
                          ? renderSubmenu(menuItem.submenu, String(index))
                          : ""}
                      </div>
                    )
                  }
                  if (menuItem.extraInfo === "separator") {
                    return <div key={index} className={styles.separator}></div>
                  }
                  return null
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ****************************************** */}

      {(toPop === "popoutMonths" ||
        toPop === "popoutDays" ||
        toPop === "popoutYears") && (
        <div
          className={styles.clickTrapContainer}
          onClick={(e) => handleCloseTrap(e, menuRef, popoutRef)}
          onContextMenu={(e) => handleCloseTrap(e, menuRef, popoutRef)}
        >
          <div
            ref={popoutRef}
            className={styles.popoutWrapper}
            style={{
              position: "absolute",
              bottom: `${bottom}px`,
              left: `${left}px`,
            }}
          >
            <div
              className={styles.popoutScroller}
              style={{ width: width, minHeight: "0px", maxHeight: maxHeight }}
            >
              {popoutList.map((option, index) => {
                return (
                  <div
                    key={index}
                    className={styles.Option}
                    onClick={(e) => handleDobChange(e, option, toPop)}
                  >
                    {option.label}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ClickTrapContainer

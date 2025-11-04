import React, { useEffect, useRef } from "react"
import styles from "../../styles/uiCss/Resizer.module.css"

function Resizer({setSidebarWidth}) {
  const isResizing = useRef(false)
  const resizerRef = useRef(null)

  const MIN = 192
  const MAX = 360

  function onPointerDown(e) {
    // only left button
    if (e.button !== 0) return
    isResizing.current = true

    // force global cursor + disable selection while dragging
    document.body.classList.add(styles.resizing)
    document.body.style.userSelect = "none"

    // capture pointer so we keep getting events even if pointer leaves element
    try {
      e.currentTarget.setPointerCapture?.(e.pointerId)
    } catch (err) {}
  }

  function onPointerMove(e) {
    if (!isResizing.current) return
    let newW = e.clientX - 72
    if (newW < MIN) newW = MIN
    if (newW > MAX) newW = MAX
    setSidebarWidth(newW)
  }

  function stopResizing(e) {
    if (!isResizing.current) return
    isResizing.current = false
    document.body.classList.remove(styles.resizing)
    document.body.style.userSelect = ""
    try {
      resizerRef.current?.releasePointerCapture?.(e?.pointerId)
    } catch (err) {}
  }

  useEffect(() => {
    const onDocMove = (e) => onPointerMove(e)
    const onDocUp = (e) => stopResizing(e)
    const onDocDragStart = (e) => {
      // block native drag while resizing (images/links etc.)
      if (isResizing.current) e.preventDefault()
    }

    document.addEventListener("pointermove", onDocMove)
    document.addEventListener("pointerup", onDocUp)
    document.addEventListener("dragstart", onDocDragStart, true)
    window.addEventListener("blur", stopResizing)
    document.addEventListener("mouseleave", stopResizing)

    return () => {
      document.removeEventListener("pointermove", onDocMove)
      document.removeEventListener("pointerup", onDocUp)
      document.removeEventListener("dragstart", onDocDragStart, true)
      window.removeEventListener("blur", stopResizing)
      document.removeEventListener("mouseleave", stopResizing)
    }
    // empty deps so add/remove run once
  }, [])
  return (
    <div
      ref={resizerRef}
      className={styles.resizerHandle}
      onPointerDown={onPointerDown}
      onDragStart={(e) => e.preventDefault()} // extra safety
    />
  )
}

export default Resizer

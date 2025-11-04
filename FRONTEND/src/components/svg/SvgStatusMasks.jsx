import React from 'react'

function SvgStatusMasks() {
  return (
    <svg viewBox="0 0 1 1" style={{position: "absolute", pointerEvents: "none", top: "-1px", left: "-1px", width: "1px", height: "1px"}}>
        <mask id="mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
            <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
            <circle fill="black" cx="0.5" cy="0.5" r="0.25"></circle>
        </mask>
        <mask id="mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
          <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
          <rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125"></rect>
        </mask>
        <mask id="mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
          <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
        </mask>
        <mask id="mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
          <circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>
          <circle fill="black" cx="0.25" cy="0.25" r="0.375"></circle>
        </mask>
    </svg>

  )
}

export default SvgStatusMasks
import { createContext, useMemo, useState } from "react"

export const ClickTrapContainerContext = createContext()

export const ClickTrapContainerContextProvider = ({ children }) => {
  const initialContextMenu = {
    toShow: undefined,
    pointerX: 0,
    pointerY: 0,
  }

  const initialPopout = {
    toPop: undefined,
    bottom: 0,
    left: 0,
    maxHeight: 0,
    width: 0,
  }

  const [ShowContextMenu, setShowContextMenu] = useState(initialContextMenu)
  const [ShowPopout, setShowPopout] = useState(initialPopout)

  function handleMenuTrapping(e, toShow) {
    e.preventDefault()
    setShowContextMenu({
      toShow: toShow,
      pointerX: e.clientX,
      pointerY: e.clientY,
    })
  }

  function handlePopTraping(e, toPop) {
    e.preventDefault()
    e.stopPropagation()
    const rectDimension = e.currentTarget.getBoundingClientRect()
    setShowPopout({
      toPop,
      bottom: window.innerHeight - rectDimension.top,
      left: rectDimension.left,
      width: rectDimension.width,
      maxHeight: "266px",
    })
  }

  function handleCloseTrap(e, menuRef, popoutRef) {
    e.preventDefault()
    e.stopPropagation()
    if (menuRef.current && menuRef.current.contains(e.target)) {
      console.log("nothing......")
    } else if (popoutRef.current && popoutRef.current.contains(e.target)) {
      // console.log("nothing......");
      setShowPopout(initialPopout)
    } else {
      // console.log("somethingg....");
      setShowContextMenu(initialContextMenu)
      setShowPopout(initialPopout)
    }
  }

  const handleResize = () => {
    console.log("Window resized")
    setShowContextMenu(initialContextMenu)
    setShowPopout(initialPopout)
  }

  // we can use multi level nested dropdown/context menu
  const contextMenu = [
    {
      label: "Profile",
    },
    {
      label: "Message",
    },
    {
      label: "Call",
    },
    {
      label: "Add Note",
      subtext: "Only visible to you",
    },
    {
      label: "Add Friend Nickname",
    },
    {
      extraInfo: "separator",
    },
    {
      label: "Invite to Server",
      submenu: [
        {
          label: "server 1",
          submenu: [
            {
              label: "server 1 level 2",
              submenu: [
                {
                  label: "server 1 level 3",
                },
                {
                  label: "server 1 level 3",
                },
              ],
              extraInfo: "hasSubmenu",
            },
            {
              label: "server 1 level 2",
            },
            {
              label: "server 1 level 2",
            },
          ],
          extraInfo: "hasSubmenu",
        },
        {
          label: "server 2",
        },
        {
          label: "server 3",
        },
        {
          label: "server 4",
        },
      ],
      extraInfo: "hasSubmenu",
    },
    {
      label: "Remove Friend",
    },
    {
      label: "Ignore",
    },
    {
      label: "Block",
      extraInfo: "danger",
    },
  ]

  const moreOption = [
    {
      label: "Start Video Call",
    },
    {
      label: "Start Voice Call",
    },
    {
      label: "Remove Friend",
      extraInfo: "danger",
    },
  ]

  const popoutMonths = [
    {
      label: "January",
    },
    {
      label: "February",
    },
    {
      label: "March",
    },
    {
      label: "April",
    },
    {
      label: "May",
    },
    {
      label: "June",
    },
    {
      label: "July",
    },
    {
      label: "August",
    },
    {
      label: "September",
    },
    {
      label: "October",
    },
    {
      label: "November",
    },
    {
      label: "December",
    },
  ]

  const popoutDays = useMemo(() => {
    const days = []
    for (let i = 1; i <= 31; i++) {
      days.push({ label: i })
    }

    return days
  }, [])

  const popoutYears = useMemo(() => {
    const years = []
    const now = new Date()
    for (let i = 1873; i <= now.getFullYear() - 3; i++) {
      years.push({ label: i })
    }

    return years.reverse()
  }, [])

  const value = {
    initialContextMenu,
    ShowContextMenu,
    setShowContextMenu,
    handleMenuTrapping,
    initialPopout,
    ShowPopout,
    setShowPopout,
    handlePopTraping,
    handleCloseTrap,
    handleResize,
    moreOption,
    contextMenu,
    popoutMonths,
    popoutDays,
    popoutYears,
  }

  return (
    <ClickTrapContainerContext.Provider value={value}>
      {children}
    </ClickTrapContainerContext.Provider>
  )
}

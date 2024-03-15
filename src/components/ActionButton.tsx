import React from "react"

interface ActionButtonType {
    color:string,
    handleClick:() => void
    children:React.ReactNode
    // handleClick:(id:string | number) => void
}

const ActionButton = ({color, handleClick, children} : ActionButtonType) => {
    // fuchsia
  return (
    <button
          className={`${color} text-xl text-sky-50 rounded-lg px-4 py-2 duration-300 hover:scale-110`}
          onClick={handleClick}
        >
          {children}
        </button>
  )
}

export default ActionButton

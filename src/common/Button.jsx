import React from 'react'

const Button = ({text, onClick, id='', className }) => {
  return (
    <button id={id} onClick={onClick} className={className} >{text}</button>
  )
}

export default Button
import React from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from 'react'
import useDarkMode from 'use-dark-mode';
import "./profile.css"

function DarkModeToggleBtn() {
    const darkMode = useDarkMode(false);
  return (
    <div className='darkMode__btn'> <DarkModeToggle
    onChange={darkMode.toggle}
    checked={darkMode.value}
    size={90}
  /></div>
  )
}

export default DarkModeToggleBtn
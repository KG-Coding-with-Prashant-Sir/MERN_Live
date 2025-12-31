import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext';

const Welcome = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <h1 className={`text-6xl p-5 text-bold ${theme === 'light' ? "text-gray-800 bg-slate-200" : "text-slate-200 bg-gray-800"} `}>Welcome to Theme Changing App</h1>
  )
}

export default Welcome
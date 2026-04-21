import React, { useState } from 'react'
import { createContext } from 'react'

export const PostContextData = createContext()

const ThemeContext = (props) => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <PostContextData.Provider value={[theme,settheme]}>
        {props.children}
      </PostContextData.Provider>
    </div>
  )
}

export default ThemeContext

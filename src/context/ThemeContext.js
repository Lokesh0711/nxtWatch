import React from 'react'

const ThemeContext = React.createContext({
  isDark: false,
  savedVideoList: [],
  editSavedVideoList: () => {},
  changeTheme: () => {},
})

export default ThemeContext

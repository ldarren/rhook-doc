const e=`import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()

const themeStyles = (dark) => ({
  backgroundColor: dark ? '#333' : '#ccc',
  color: dark ? '#ccc' : '#333',
  padding: '2rem',
  margin: '2rem'
})

class ClassContextComponent extends React.Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={themeStyles(darkTheme)}>Class Theme</div>
        }}
      </ThemeContext.Consumer>
    )
  }
}

function FunctionContextComponent() {
  //
  const darkTheme = useContext(ThemeContext)

  return <div style={themeStyles(darkTheme)}>Function Theme</div>
}


function App() {
  //
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <div style={{'textAlign':'center'}}>
      <h1>Simple useContext Theme Example</h1>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </div>
  )
}

<App/>
`;export{e as default};

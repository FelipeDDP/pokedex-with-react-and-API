import { useContext } from 'react';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider, ThemeContext } from './contexts/theme-context';
import { AppRoutes } from './pages/routes';
import styled from 'styled-components';

function App() {

  return (
    <ThemeProvider>
      <Div>
        <ThemeTogglerButton />
        <AppRoutes />
      </Div>
    </ThemeProvider>
    
  )
}

export default App

export const Div = (props) => {
  const { theme } = useContext(ThemeContext)
  // console.log(theme)
  return (
    <Div1 style={{ backgroundColor: theme.bgBody }}>
          {props.children}
    </Div1>
  )
}

// console.log(theme)

const Div1 = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`



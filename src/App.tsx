import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/defaultTheme'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

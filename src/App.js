import { BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import NavBar from "./components/NavBar"
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import '@fontsource/roboto';


const theme = createTheme({
  palette: {
    type: 'dark'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={About} path='/about' />
          <Route component={Projects} path='/projects' />
        </Switch>
      </BrowserRouter>
      </ThemeProvider>
  )
}

export default App;

import Homepage from './pages/Homepage'
import NavbarComponent from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
      </div>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

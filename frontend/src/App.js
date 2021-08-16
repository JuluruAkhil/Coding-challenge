import Homepage from './pages/Homepage'
import Cart from './pages/Cart'
import NavbarComponent from './components/Navbar'
import ProjectsColour from './pages/ProjectsColour'
import Leaderboard from './pages/Leaderboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
      </div>
      <Switch>
        <Route path="/profile">
          <ProjectsColour />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

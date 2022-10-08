import './App.css'
import Navbar from './components/Navbar'
import logo from "assets/pictures/MM2.png"

function App() {
  return (
      <div>
        <Navbar>
          <Navbar.Logo href="/" name="MindMatter Medical Logo" src={logo}/>
          <Navbar.List>
            <Navbar.ListDropdown name="Procedures"/>
            <Navbar.ListLink name="Research"/>
            <Navbar.ListLink name="Careers"/>
            <Navbar.ListLink name="About"/>
            <Navbar.ListLink name="Inquiries"/>
          </Navbar.List>
        </Navbar>
      </div>
  )
}

export default App

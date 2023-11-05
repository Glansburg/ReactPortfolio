import { useState } from 'react'
import './App.css'
import Nav from "./components/Navigation"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import About from "./components/About"
import Github from "./assets/github.svg"
import Linkedin from "./assets/Linkedin.svg"




function App() {
 //const [count, setCount] = useState(0)
const [page, setPage] = useState("About")
//<img src="https://www.place-hold.it/250x100"></img>
  return (
    <>
   <header className="flex-header">
  <div className="name-div"> Joel Getzke</div>
    <Nav setPage={setPage}>
    </Nav>
   </header>
   <main className="header-border">
    <ul>
        <li className="prevent-default">{page === "About" ? <About></About> : null}</li>
        <li className="prevent-default">{page === "Portfolio" ? <Portfolio></Portfolio> : null}</li>
        <li className="prevent-default">{page === "Contact" ? <Contact></Contact> : null}</li>
        <li className="prevent-default">{page === "Resume" ? <Resume></Resume> : null}</li>
    </ul>
    
</main>

  <footer className="flex-footer">
  <div className="space-between">
   
  <a href="https://github.com/JoelGetzke">
  <img className="margin-footer-right" src={Github} alt="sellegant" />
</a>

  
  <div className="fs-5">Professional Profiles/Additional Projects</div>
  <a href="https://www.linkedin.com/in/joel-getzke-8b0288298/">
  <img className="" src={Linkedin} alt="sellegant" />
</a>

 </div>
  </footer>
   
    </>
    
  )
}

export default App

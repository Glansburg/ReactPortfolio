import { useState } from 'react'
import './App.css'
import Nav from "./components/Navigation"
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import About from "./components/About"
import Footer from './components/Footer'



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
        <li className="prevent-default hover-underline">{page === "About" ? <About></About> : null}</li>
        <li className="prevent-default hover-underline">{page === "Portfolio" ? <Portfolio></Portfolio> : null}</li>
        <li className="prevent-default hover-underline">{page === "Contact" ? <Contact></Contact> : null}</li>
        <li className="prevent-default hover-underline">{page === "Resume" ? <Resume></Resume> : null}</li>
    </ul>
</main>

     <footer>{Footer}</footer>
   
    </>
    
  )
}

export default App

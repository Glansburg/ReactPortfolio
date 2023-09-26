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
     <main>
      {
        page==="About"?<About></About>:""+
        page==="Portfolio"?<Portfolio></Portfolio>:""+
        page==="Contact"?<Contact></Contact>:""+
        page==="Resume"?<Resume></Resume>:""
      }
     </main>
     <footer>{Footer}</footer>
   
    </>
  )
}

export default App

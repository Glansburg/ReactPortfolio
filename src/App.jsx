import { useState } from "react";
import "./App.css";
import Nav from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

import About from "./components/About";
import Github from "./assets/github.svg";
import Linkedin from "./assets/linkedin.svg";
import Email from "./assets/email.svg";

function App() {
  const [page, setPage] = useState("About");

  return (
    <>
      {/* Header for all pages */}
      <header className="flex-header">
        <div className="name-div">
          {" "}
          Joel Getzke
        </div>
        <Nav setPage={setPage}></Nav>
      </header>
      {/* Main for all pages */}
      <main className="header-border">
        <ul>
          <li className="prevent-default">
            {page === "About" ? <About></About> : null}
          </li>
          <li className="prevent-default">
            {page === "Portfolio" ? <Portfolio></Portfolio> : null}
          </li>
          <li className="prevent-default">
            {page === "Resume" ? <Resume></Resume> : null}
          </li>
        </ul>
      </main>
      {/* Footer for all pages */}
      <footer className="flex-footer">
        <div className="space-between">
          <a href="https://github.com/JoelGetzke" target="_blank">
            <img className="margin-footer-right" src={Github} alt="github" />
          </a>

          <a href="mailto:joelgetzke@outlook.com" target="_blank">
            <img className="margin-footer-right" src={Email} alt="email" />
          </a>

          <a
            href="https://www.linkedin.com/in/joel-getzke-8b0288298/"
            target="_blank"
          >
            <img className="" src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;

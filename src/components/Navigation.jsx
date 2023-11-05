import { useState } from 'react';

function Nav({setPage}) {
    return (
        <nav className='site-nav'>
      <a className="nav-link hover-underline fs-5" onClick={(e)=> setPage("About")}>About Me</a>
      <a className="nav-link hover-underline fs-5" onClick={(e)=> setPage("Portfolio")}>Portfolio</a>
      <a className="nav-link hover-underline fs-5" onClick={(e)=> setPage("Resume")}>Resume</a>
    </nav>
    )
}

export default Nav


import '../styles/navbar.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [scrollState, setscrollState] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setscrollState(offset>28);
        }
      
        window.addEventListener('scroll', handleScroll);
        
      }, [])
      

    return(
       <div className={`navbar ${scrollState ? 'scrolled' : ''}`} >
        <div className='link'>
            <Link to="/" className='nav-links'>Work</Link>
        </div>
        <div className='link'>
            <Link to="/about" className='nav-links'>About</Link>
        </div>
        <div className='link'>
            <Link to="/tech-stack" className='nav-links'>Tech-Stack</Link>
        </div>
        <div className='link'>
            <Link to="/connect" className='nav-links'>Connect</Link>
        </div>    
       </div>
    )
}



export default Navbar;
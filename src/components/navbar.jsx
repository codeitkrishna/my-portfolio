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
       <nav className={`navbar ${scrollState ? 'scrolled' : ''}`} >
        <div>
            <Link to="/" className='nav-links'>Work</Link>
        </div>
                    
       </nav>
    )
}

export default Navbar;
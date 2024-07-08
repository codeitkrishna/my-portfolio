import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import '../styles/work.css';
import Typed from 'typed.js';
import Footer from '../components/footer';


function Work() {
    const role = React.useRef(null);
    const [Progress, setProgress] = useState(false)

    useEffect(() => {
    const typed = new Typed(role.current, {
      strings: ['^300 Software Developer ^200', 'Designer ^200', 'Photographer ^200', 'Artist ^200'],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };

  }, []);

    const mouseEnter = () => {
        setProgress(true);
        
    };

    const mouseLeave = () => {
        setProgress(false);
    };

    const buttonStyle = useMemo(
        () => ({
          color: Progress ? "#243831" : "#A3DCD4",
          marginLeft:'3rem',
          cursor: 'pointer',
          transition: '0.2s'
        }),
        [Progress]
      );

    return (
        <div className='w-main'>

            <div className='w-hero'>
                <div className='w-heading'>
                    Hi. I'm Krishna. <br />
                    A &lt; <span ref={role} className='w-heading'/> /&gt;
                </div>
                <div className='w-hero-line'>
                    Designing the future, one pixel at a time.
                </div>
            </div>
            

            <div className="work-projects">
                <div className="w-project-row">
                    <div className="w-project-1">
                        <div className='w-project-text'>Impresso Espresso</div>
                        <div className='project-description'>Frontend Design</div>
                        <div className="ie-image"></div>
                    </div>
                    <div className=" w-project-2">
                        <div className='w-project-text'>Inventory Management</div>
                        <div className='project-description'>Database Management System.</div>
                    </div>
                </div>

                <div className='w-project-row'>
                    <div className=" w-project-3">
                        <div className='w-project-text'>FinMan</div>
                        <div className='project-description'>UI/UX || Case-Study</div>
                    </div>
                    <div className=" w-project-4" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                        <div className='w-project-text' style={{display:"flex", justifyContent:"space-between"}}>
                            <div style={buttonStyle} >*In Progress</div>
                            <div style={{alignSelf:"right"}}>Flux</div>
                        </div>
                        <div className='project-description'>Full-stack Developer </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
        
    );
}

export default Work;

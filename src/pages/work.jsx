import React from 'react';
import { useEffect } from 'react';
import '../styles/work.css';
import Typed from 'typed.js';

function Work() {
    const role = React.useRef(null);

    useEffect(() => {
    const typed = new Typed(role.current, {
      strings: ['Software Developer ^150', 'Designer ^150', 'Photographer ^150', 'Artist ^150'],
      typeSpeed: 20,
      backSpeed: 27,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };

  }, []);

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
                        <p className='w-project-text'>Impresso Espresso</p>
                    </div>
                    <div className="w-project-2">
                    <p className='w-project-text'>DBMS</p>
                    </div>
                </div>

                <div className='w-project-row'>

                    <div className="w-project-3">
                        <p className='w-project-text'>Flux</p>
                    </div>
                    <div className="w-project-4">
                        <p className='w-project-text'>FinMan</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Work;

import * as React from "react";
import '../styles/tech-stack.css'
import Footer from '../components/footer';

function TechStack() {
    const techStack = [
        { name: 'Javascript', src: '/static/media/logos/8.svg' },
        { name: 'TypeScript', src: '/static/media/logos/5.svg' },
        { name: 'React', src: '/static/media/logos/2.svg' },
        { name: 'Tailwind CSS', src: '/static/media/logos/9.svg' },
        { name: 'NodeJS', src: '/static/media/logos/10.svg' },
        { name: 'Mongo', src: '/static/media/logos/3.svg' },
        { name: 'MySQL', src: '/static/media/logos/7.svg' },
        { name: 'Figma', src: '/static/media/logos/4.svg' },
        { name: 'C++', src: '/static/media/logos/6.svg' }, 
        { name: 'Python', src: '/static/media/logos/11.svg' },
    ];

    return (
        <div className="ts-main">

                <div className="ts-header">
                    Skills I bring to the table.
                </div>
                <div className="tech-stack">
                {techStack.map((tech, index) => (
                    <div key={index} className="ts-outerBox">
                        <div className="logo-name">{tech.name}</div>
                        <img src={tech.src} alt={tech.name} className="logo-image" />
                    </div>
                ))}
                </div>
                <div className="resume">
                    {/* <div className="res-header">
                        View My Resume.
                    </div> */}
                    <button className="res-button">View My Resume</button>
                    
                </div>

            <Footer />
        </div>
    );
    
}

export default TechStack;
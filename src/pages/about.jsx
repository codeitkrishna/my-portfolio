import '../styles/about.css'
import Footer from '../components/footer';

function About() {
    return(
        <div className="about">

            <div className="about-title">
                I'm Krishna.
            </div>
            <div className="about-intro">
                <div className='self-image'> </div>
                <div className='about-content'>
                    <div className='headline'>
                        I am a Fullstack Developer and a Designer, always eager to learn something new and try new pizzas.
                    </div>
                    <div className="intro">
                    I have just stepped onto the path of my professional career and am dedicated to working hard to improve with time and experience. 
                    I am skilled in full-stack development and am currently upskilling myself with cloud platforms and related services. 
                    I have a strong foundation in logic and am eager to continue learning and growing in my field.
                    </div>
                </div>
            </div>
            <div className='services'>
                <div className='services-header'>
                    Let's collaborate if you're committed to quality experiments.
                </div>
                <div className='beliefs'>
                    <div className='outer-box'>
                        <div className="inner-box-1">Do it.</div>
                        <div className="inner-box-2">
                            I believe in starting rather than overthinking, and in finishing what I've started. 
                            Cutting corners is not something I believe in. 
                            Every task is an opportunity to demonstrate commitment and excellence.</div>
                        </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Experiment.</div>
                        <div className="inner-box-2">A person should never be afraid to try something new, and I consider myself one of those people. Embracing new challenges fosters growth and innovation.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Discuss.</div>
                        <div className="inner-box-2">Desirable results are not achieved in isolation. I look forward to discussing, collaborating, and working together on any task. Through open communication and shared ideas, we can achieve great things.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Fail? Never.</div>
                        <div className="inner-box-2">I don't believe in failures. Setbacks always have a way to be overcome. Each obstacle is a learning experience, paving the way for future success.</div>
                    </div>
                </div>
            </div>
            <div className="me">
                <div className='extra-text'>
                When I'm not working, you'll often find me sketching, enjoying good music, playing football, or exploring around.
                There's something called Life, which is not just restricted to your work. Everything else is just as much important for a person to grow.
                Capturing beautiful moments is one of my many passions, and embracing my surroundings will always be a part of who I am.
                </div>
                <div className='photos'>
                    <div className='sketch-1'></div>
                    <div className='marine-drive'></div>
                    <div className='sketch-2'></div>
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default About;


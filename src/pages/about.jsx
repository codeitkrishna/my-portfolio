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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus nostrum eaque soluta et facilis, sit nesciunt asperiores aspernatur non dolorem tempore esse quos cumque voluptates dicta rerum, atque hic.
                        In et tempore voluptatem, nihil eaque ab sapiente eius itaque libero odit qui perspiciatis natus nostrum veniam obcaecati alias animi ex omnis unde dicta, incidunt nisi sit possimus laboriosam. Consectetur.
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
                        <div className="inner-box-2">I believe in starting instead of thinking, and finishing what I've started. Cutting corners is not something I believe in.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Experiment.</div>
                        <div className="inner-box-2">A person should never be afraid of getting their hands on something new, and I believe I am one of that kind of a person.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Discuss.</div>
                        <div className="inner-box-2">Desirable end results are not achieved in vacuum. I look forward to discuss, collaborate and work together on any kind of task.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Fail? Never.</div>
                        <div className="inner-box-2">I don't believe in failures. Setbacks always have a way to be overcame.</div>
                    </div>
                </div>
            </div>
            <div className="me">
                <div className='extra-text'>
                When you don't see me working, you can see my sketching, enjoying my time listening to good music, playing football or exploring around.
                There's something called Life, which is not just restricted to your work. Everything else is just as much important for a person to grow.
                Capturing beautiful moments is one of my many passions, embracing the surrounding will always be one of them.
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


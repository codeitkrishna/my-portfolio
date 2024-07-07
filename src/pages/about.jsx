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
                        <div className="inner-box-1">Make it</div>
                        <div className="inner-box-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus nostrum eaque soluta et facilis, sit nesciunt asperiores aspernatur non dolorem tempore esse quos cumque voluptates dicta rerum, atque hic.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Experiment</div>
                        <div className="inner-box-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus nostrum eaque soluta et facilis, sit nesciunt asperiores aspernatur non dolorem tempore esse quos cumque voluptates dicta rerum, atque hic.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Lorem ipsum</div>
                        <div className="inner-box-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus nostrum eaque soluta et facilis, sit nesciunt asperiores aspernatur non dolorem tempore esse quos cumque voluptates dicta rerum, atque hic.</div>
                    </div>
                    <div className='outer-box'>
                        <div className="inner-box-1">Lorem Ipsum</div>
                        <div className="inner-box-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus nostrum eaque soluta et facilis, sit nesciunt asperiores aspernatur non dolorem tempore esse quos cumque voluptates dicta rerum, atque hic.</div>
                    </div>
                </div>
            </div>
            <div className="me">
                <div className='extra-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus nostrum eaque soluta et facilis, sit nesciunt asperiores aspernatur non dolorem tempore esse quos cumque voluptates dicta rerum, atque hic.
                In et tempore voluptatem, nihil eaque ab sapiente eius itaque libero odit qui perspiciatis natus nostrum veniam obcaecati alias animi ex omnis unde dicta, incidunt nisi sit possimus laboriosam. Consectetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloribus nostrum eaque soluta et facilis, sit nesciunt asperiores aspernatur non dolorem tempore esse quos cumque voluptates dicta rerum, atque hic.
                </div>
                <div className='photos'>

                </div>
            </div>
        <Footer />
        </div>
    )
}

export default About;


import '../styles/about.css'
import Footer from '../components/footer';

function About() {
    return(
        <div className="about">
            <div className='hero-gradient'> </div>

            <div className="about-title">
                I'm Krishna!
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
                        Eveniet temporibus vitae necessitatibus dignissimos aspernatur, molestias iste saepe? Inventore, atque vel. Asperiores laborum molestiae pariatur qui quo veritatis earum ea! Quaerat, odio reiciendis! Laboriosam ullam aspernatur earum facere dolorum?
                        Itaque alias molestiae quis qui, tempora libero nulla rem, consectetur, consequuntur beatae aspernatur ab veniam veritatis doloribus impedit odio quae autem facere porro? Harum unde repellendus reprehenderit repudiandae natus cum.
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
        <Footer />
        </div>
    )
}

export default About;


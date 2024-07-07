import '../styles/footer.css'
import { ReactComponent as Heart } from '../assets/heart-svgrepo-com.svg';

function footer() {
    return (
        <div className="footer">
            <div className='ft-name'>Krishna Gupta</div>
            <div className='ft-items'>
                <div className='work'>Work</div>
                <div className='abt'>About</div>
                <div className='ts'>Tech-Stack</div>
                <div className='connect'>Connect</div>
            </div>

            <div className='love'>Made with
                <span className='heart'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -6 24 24" width="24" height="30">
                        <Heart width="24" height="24" />
                    </svg>
                </span>
                by Krishna Gupta.
            </div>
        </div>
    )
}

export default footer;
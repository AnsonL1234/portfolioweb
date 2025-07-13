import ReactLogo from '../image/reactJsLogo.png'
import githubIcon from '../image/github.png'
import linkedinIcon from '../image/linkedin.png'
import instaIcon from '../image/instagram.png'
import twitterIcon from '../image/twitter.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='bg-dark' data-bs-theme="dark">
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className='footer-left-top'>
                        <img src={ReactLogo} alt='#' />
                        <h5>React - Web APP Developme</h5>
                    </div>
                    <div className="footer-left-bottom">
                        Home | Portfolio | Resume | About | Contact
                    </div>
                </div>

                <div className="footer-top-right">
                    <div className="footer-right-top">
                        <h5>Social Media</h5>
                    </div>
                    <ul>
                        <li><a href="#"><img src={githubIcon} /></a></li>
                        <li><a href="#"><img src={linkedinIcon} /></a></li>
                        <li><a href="#"><img src={instaIcon} /></a></li>
                        <li><a href="#"><img src={twitterIcon} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>©2025 Portfolio Website - Website and all created art style are reserved by Developer</p>
            </div>
        </footer>
    );
}
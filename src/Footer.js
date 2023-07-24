import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="center-content">
                <FontAwesomeIcon icon = {faHouse} className="fa-xl"/>
                <div className="contact">  
                    <div className="address">
                        <strong>75 Laurier Ave E, </strong><br/>
                        <strong>Ottawa, </strong> <br/>
                        <strong>ON K1N 6N5</strong>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <h1 className="name">Urban Kicks</h1>
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <strong> 555-555-5555</strong>
                </div>
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <strong> urbankicks@gmail.com</strong>
                </div>
            </div>
            <div className="right-content">
                <div className="social-icons">
                    <a className="twitter" href="https://twitter.com/urbankicks">
                        <FontAwesomeIcon icon={ faTwitter } />
                    </a>
                    <a className="instagram" href="https://instagram.com/urbankicks">
                        <FontAwesomeIcon icon={ faInstagram } />
                    </a>
                    <a className="facebook" href="https://facebook.com/urbankicks">
                        <FontAwesomeIcon icon={ faFacebook } />
                    </a>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;
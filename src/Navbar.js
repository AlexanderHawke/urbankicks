import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> Urban Kicks </h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/shop"> Mens </Link>
                <Link to="/shop"> Womens </Link>
                <Link to="/shop"> Kids </Link>
                <Link to="/shop"> Featured </Link>
                <Link to="/shop"> 
                    <FontAwesomeIcon icon={ faBagShopping }></FontAwesomeIcon>
                </Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="title"> Urban Kicks </h1>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to={{ pathname: "/shop", state: { gender: "mens" } }}> Mens </Link>
                <Link to={{ pathname: "/shop", state: { gender: "womens" } }}> Womens </Link>
                <Link to={{ pathname: "/shop", state: { gender: "kids" } }}> Kids </Link>
                <Link to="/reviews"> Reviews </Link>
            </div>
            <Link to="/cart" className="cart-link">
                <FontAwesomeIcon className="cart-icon" icon={ faCartShopping } ></FontAwesomeIcon>
            </Link>
        </nav>
     );
}

export default Navbar;
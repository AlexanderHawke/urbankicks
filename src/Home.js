import shoeModel from "./images/welcomePageShoeModel.jpg"
import shoe1Image from './images/shoe1Image.jpg'
import shoe2Image from './images/shoe2Image.jpg'
import shoe3Image from './images/shoe3Image.jpg'
import shoe4Image from './images/shoe4Image.png'
import shoe5Image from './images/shoe5Image.jpg'

const Home = () => {

    return ( 
        <>
        <div className="home">
            <img src={shoeModel} alt="Welcome Page"></img>
        </div>
        <h1 className="featured-text"> Shop featured items!</h1>
        <div className="featured-items">
            <img className="featured-item" src={shoe1Image} alt="Welcome Page"></img>
            <img className="featured-item" src={shoe2Image} alt="Welcome Page"></img>
            <img className="featured-item" src={shoe3Image} alt="Welcome Page"></img>
            <img className="featured-item" src={shoe4Image} alt="Welcome Page"></img>
            <img className="featured-item" src={shoe5Image} alt="Welcome Page"></img>
        </div>
        </>
    );
}
 
export default Home;
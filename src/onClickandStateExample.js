import { useState } from 'react';

const Home = () => {
    
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(0);

    const handleClick = (e) => {
        console.log("Hello world", e);
        return  ( <p> Hello world!!!</p>);
    }

    // THIS IS EQUIVALENT TO ABOVE
    // function handleClick(e) { 
    //     console.log("Hello world, e");
    // }
    
    const handleClickAgain = (name, e) => {
        setName(window.prompt("Enter a name"));
        setAge(window.prompt("Enter an age"));
        console.log("Hello " + name, e.target);
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click me</button>
            <p> Your name is: {name} .</p>
            <p> You are {age} years old.</p>
            <button onClick = {(e) => {handleClickAgain(name, e)}}>Click me again</button>
        </div>
     );
}
 
export default Home;
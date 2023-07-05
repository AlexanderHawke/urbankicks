import ShoeList from './ShoeList'
import {useState} from 'react'

const Shop = () => {
    const [shoes, setShoes] = useState([
        {title: 'Shoe1', description: 'blah blah blah...', author: 'mario', color: 'red', id : 1},
        {title: 'Shoe2', description: 'blah blah blah...', author: 'mario', color: 'green', id : 2},
        {title: 'Shoe3', description: 'blah blah blah...', author: 'mario', color: 'blue', id : 3},
        {title: 'Shoe4', description: 'blah blah blah...', author: 'mario', color: 'yellow', id : 4},
        {title: 'Shoe5', description: 'blah blah blah...', author: 'luigi', color: 'orange', id : 5},
        {title: 'Shoe6', description: 'blah blah blah...', author: 'alex', color: 'black', id : 6},
    ]);

    const handleDelete = (id) => {
        const newShoes = shoes.filter(shoe => shoe.id !== id);
        setShoes(newShoes);
    }

    return ( 
        <div className="create">
            <ShoeList shoes={shoes} title = "All shoes" handleDelete = {handleDelete}/>
        </div>
    );
}

export default Shop;

import React, { useState, useEffect } from 'react';
import ShoeList from './ShoeList'
import Filter from './Filter'
import shoe1Image from './images/shoe1Image.jpg'
import shoe2Image from './images/shoe2Image.jpg'
import shoe3Image from './images/shoe3Image.jpg'
import shoe4Image from './images/shoe4Image.png'
import shoe5Image from './images/shoe5Image.jpg'
import shoe6Image from './images/shoe6Image.png'
import shoe7Image from './images/shoe7Image.png'
import shoe8Image from './images/shoe8Image.jpg'
import shoe9Image from './images/shoe9Image.png'
import shoe10Image from './images/shoe10Image.png'
import { useLocation } from 'react-router-dom'

const Shop = () => {

    const location = useLocation();

    const [shoes, setShoes] = useState([
        {id : 1, title: 'Red Fire', description: 'blah blah blah...', image: shoe1Image, color: 'red', type: 'walking', gender: 'mens', price: '100'},
        {id : 2, title: 'White sneakers', description: 'blah blah blah...', image: shoe2Image, color: 'white', type: 'running', gender: 'womens', price: '200'},
        {id : 3, title: 'Balling', description: 'blah blah blah...', image: shoe3Image, color: 'black', type: 'basketball', gender: 'mens', price: '300'},
        {id : 4, title: 'Cool Ocean', description: 'blah blah blah...', image: shoe4Image, color: 'blue', type: 'training', gender: 'mens', price: '400'},
        {id : 5, title: 'Miami', description: 'blah blah blah...', image: shoe5Image, color: 'pink', type: 'training', gender: 'womens', price: '150'},
        {id : 6, title: 'Lemon Lineup', description: 'blah blah blah...', image: shoe6Image, color: 'yellow', type: 'running', gender: 'womens', price: '175'},
        {id : 7, title: 'Little Player', description: 'blah blah blah...', image: shoe7Image, color: 'green', type: 'tennis', gender: 'kids', price: '325'},
        {id : 8, title: 'Highups', description: 'blah blah blah...', image: shoe8Image, color: 'purple', type: 'high-tops', gender: 'mens', price: '200'},
        {id : 9, title: 'Cleat9000', description: 'blah blah blah...', image: shoe9Image, color: 'brown', type: 'cleats', gender: 'womens', price: '450'},
        {id : 10, title: 'Nike Hitters', description: 'blah blah blah...', image: shoe10Image, color: 'orange', type: 'basketball', gender: 'mens', price: '100'},
    ]);

    const [filteredShoes, setFilteredShoes] = useState(shoes);

    // Function to filter shoes based on selected filters
    const applyFilters = (selectedGender, selectedType, selectedColour, selectedPrice, searchQuery) => {
        let filteredShoes = shoes;
        if (searchQuery !== '') {
            const formattedSearchQuery = searchQuery.toLowerCase().trim();
            filteredShoes = filteredShoes.filter((shoe) => shoe.title.toLowerCase().includes(formattedSearchQuery));
        }
        if (selectedGender !== '') {
          filteredShoes = filteredShoes.filter((shoe) => shoe.gender === selectedGender);
        }
        if (selectedType !== '') {
          filteredShoes = filteredShoes.filter((shoe) => shoe.type === selectedType);
        }
        if (selectedColour !== '') {
          filteredShoes = filteredShoes.filter((shoe) => shoe.color === selectedColour);
        }
        if (selectedPrice !== '') {
          filteredShoes = filteredShoes.filter((shoe) => parseInt(shoe.price) <= parseInt(selectedPrice));
        }
        setFilteredShoes(filteredShoes);
    };

    useEffect(() => {
      if (location.state && location.state.gender) {
          applyFilters(location.state.gender, '', '', '', '');
      }
    }, [location]);

    return ( 
        <div className="shop">
            <h1 className="shop-title"> Shoes </h1>
            <Filter applyFilters={applyFilters} />
            <ShoeList shoes={filteredShoes}/>
        </div>
    );
}

export default Shop;

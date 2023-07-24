import React, { useState } from 'react';

const Filter = ({ applyFilters }) => {
    const [price, setPrice] = useState(500);
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');
    const [colour, setColour] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handlePriceChange = (event) => {
        const selectedPrice = event.target.value;
        setPrice(selectedPrice);
        applyFilters(gender, type, colour, selectedPrice, searchQuery);
    };

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        applyFilters(selectedGender, type, colour, price, searchQuery);
    };

    const handleTypeSelect = (selectedType) => {
        setType(selectedType);
        applyFilters(gender, selectedType, colour, price, searchQuery);
    };

    const handleColourSelect = (selectedColour) => {
        setColour(selectedColour);
        applyFilters(gender, type, selectedColour, price, searchQuery);
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        applyFilters(gender, type, colour, price, query);
    };

  return (
    <div className="filter-container">
        <div className="filter">
            <h2 className='filter-title'>Search </h2>
            <div className="search">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search for shoes"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <h2 className='filter-title'>Price </h2>
            <div className="price">
                <input
                    className="price-slider"
                    type="range"
                    min="100"
                    max="500"
                    step="10"
                    value={price}
                    onChange={handlePriceChange}
                />
                <p>Price: $0 - ${price}</p>
            </div>
            <h2 className='filter-title'>Department </h2>
            <div className="department">
                <button
                    className={`filterButton ${gender === '' ? 'active' : ''}`}
                    onClick={() => handleGenderSelect('')}>
                    All
                </button>
                <button
                    className={`filterButton ${gender === 'mens' ? 'active' : ''}`}
                    onClick={() => handleGenderSelect('mens')}>
                    Mens
                </button>
                <button
                    className={`filterButton ${gender === 'womens' ? 'active' : ''}`}
                    onClick={() => handleGenderSelect('womens')}>
                    Womens
                </button>
                <button
                    className={`filterButton ${gender === 'kids' ? 'active' : ''}`}
                    onClick={() => handleGenderSelect('kids')}>
                    Kids
                </button>
            </div>
            <h2 className='filter-title'>Style </h2>
            <div className="style">
                <button
                    className={`filterButton ${type === '' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('')}>
                    All
                </button>
                <button
                    className={`filterButton ${type === 'running' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('running')}>
                    Running
                </button>
                <button
                    className={`filterButton ${type === 'walking' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('walking')}>
                    Walking
                </button>
                <button
                    className={`filterButton ${type === 'high-tops' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('high-tops')}>
                    High-tops
                </button>
                <button
                    className={`filterButton ${type === 'cleats' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('cleats')}>
                    Cleats
                </button>
                <button
                    className={`filterButton ${type === 'training' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('training')}>
                    Training
                </button>
                <button
                    className={`filterButton ${type === 'basketball' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('basketball')}>
                    Basketball
                </button>
                <button
                    className={`filterButton ${type === 'tennis' ? 'active' : ''}`}
                    onClick={() => handleTypeSelect('tennis')}>
                    Tennis
                </button>
            </div>
            <h2 className='filter-title'>Colour </h2>
            <button
                className={`filterButton ${colour === '' ? 'active' : ''}`}
                onClick={() => handleColourSelect('')}>
                Any Colour
            </button>
            <div className="colour">
                <div
                    className={`circle red ${colour === 'red' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('red')}
                ></div>
                <div
                    className={`circle blue ${colour === 'blue' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('blue')}
                ></div>
                <div
                    className={`circle green ${colour === 'green' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('green')}
                ></div>
                <div
                    className={`circle brown ${colour === 'brown' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('brown')}
                ></div>
                <div
                    className={`circle orange ${colour === 'orange' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('orange')}
                ></div>
                <div
                    className={`circle pink ${colour === 'pink' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('pink')}
                ></div>
                <div
                    className={`circle purple ${colour === 'purple' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('purple')}
                ></div>
                <div
                    className={`circle yellow ${colour === 'yellow' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('yellow')}
                ></div>
                <div
                    className={`circle white ${colour === 'white' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('white')}
                ></div>
                <div
                    className={`circle black ${colour === 'black' ? 'active' : ''}`}
                    onClick={() => handleColourSelect('black')}
                ></div>
            </div>
        </div>
    </div>
  );
};

export default Filter;
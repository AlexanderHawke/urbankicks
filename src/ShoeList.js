import React from 'react';
import { Shoe } from './Shoe'

const ShoeList = (props) => { // const ShoeList = ({ shoes, title }) => { Can also do this if you only want certain props.
    
    const shoes = props.shoes;
    console.log(shoes);

    if (shoes.length === 0) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <strong style={{ color: '#f1356d', textAlign: 'center', fontSize: '24px' }}>
                    Sorry, there are no shoes with these specifications
                </strong>
            </div>
        );
    } else {
        return ( 
            <div className="shoe-grid">
                {shoes.map((shoe) => (
                    <Shoe data={shoe}/>
                ))}
            </div>
         );
    }
}
 
export default ShoeList;
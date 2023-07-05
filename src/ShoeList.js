const ShoeList = (props) => { // const ShoeList = ({ shoes, title }) => { Can also do this if you only want certain props.
    
    const shoes = props.shoes;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return ( 
        <div className="shoe-list">
            <h2> {title} </h2>
            {shoes.map((shoe) => (
                <div className="shoe-preview" key = {shoe.id}>
                    <h2>{shoe.title}</h2>
                    <p>Description: {shoe.description}</p>
                    <p>Created by: {shoe.author}</p>
                    <br/>
                    <button onClick = {() => handleDelete(shoe.id)}>Delete Shoe</button>
                </div>
            ))}
        </div>
     );
}
 
export default ShoeList;
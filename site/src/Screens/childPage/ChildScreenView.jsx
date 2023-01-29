import { useEffect, useState } from "react";
import Cards from "../../Components/Cards";


const ChildScreenView = (props) => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product").then((response) => {
            response = response.json()
            response.then((result => {
                console.log(result);
                setProducts(result);
            }))
        })
        fetch().catch(console.error());
    }, [])


    return (
        <> 
            <Cards id={3}/>
        </>
    );
}

export default ChildScreenView;

import { useEffect, useState } from "react";
import Cards from "../../Components/Cards";


const MenScreenView = (props) => {
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
         <Cards id={1} />
      </>
   );
}

export default MenScreenView;

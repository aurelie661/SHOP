import React from 'react';
import { useEffect, useState } from "react";
import  ModalDetail  from '../Components/ModalDetail';
import  BtnModal  from '../Components/BtnModal';
import Card from 'react-bootstrap/Card';
import '../App.css';


const Cards = (props) => {
    const {id} = props;
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/product").then((response) => {
            response = response.json()
            response.then((result => {
                console.log(result);
                setItems(result);
            }))
        }).catch(console.error());
    }, [])


    const handleClick = (id) => {
        const product = items.find(item => item.id === id);
        setCurrentItem(product);
    }


    return (
        <div className='container' id='card'>
            <div className="row">
                {items.map(product => {
                    return(
                        <div className="col-12 col-md-6 col-lg-4 mx-auto m-5 " key={"womenProduct"+product.id}>
                            <Card style={{ width: '18rem'}} id={product.id} className="cardC mx-auto rounded-3">
                                <Card.Img variant="top" className='w-100 mx-auto'  id="img" src={process.env.PUBLIC_URL + product.image}/>
                                <Card.Body id='cardBody'>
                                    <Card.Title id='title'>{product.title}</Card.Title>
                                    <BtnModal onClick={handleClick} id={product.id}/>
                                </Card.Body>
                            </Card>
                        </div>
                    )                   
                })}
            </div>           
            <div>
                <ModalDetail product={currentItem}/>
            </div> 
        </div>          
    );     
};

export default Cards;



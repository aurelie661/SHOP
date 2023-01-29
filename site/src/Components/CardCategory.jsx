import React from 'react';
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import '../Components/css/styleGlobal.css';

    
const CardCategory = (props) => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/category").then((response) => {
            response = response.json()
            response.then((result => {
                console.log(result);
                setCategorys(result);
            }))
        })
        fetch().catch(console.error());
    }, [])

    return (
        <div className='container' id="card">
            <div className="row">
                {categorys.map(cat => {
                    return(
                        <div className="col-12 col-md-6 col-lg-4 mx-auto m-5" key={"cat"+cat.id}>
                            <Card style={{ width: '15.7rem'}} className="mx-auto" id='cardC'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + cat.image} id='img'/>
                            <Card.Body id='cardBody'>
                                <Card.Title id='title'>{cat.title}</Card.Title>
                            </Card.Body>
                            </Card>
                        </div>
                    )                   
                })}
            </div>
        </div>          
    );        
}

export default CardCategory;
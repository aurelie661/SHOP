import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

const CarouselProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product`, {
        method: "GET",
        headers: { "content-type": "application/json" },
        })
        .then((resp) => resp.text())
        .then((text) => {
            const data = text.toJson();
            setProducts(data);
        })
        .catch(console.log());
    }, [])

    return (
        <div className='container' id="card">
            <Carousel className='w-75 mx-auto' variant='dark'>
            {
                products.map(product => {
                    return(
                            <Carousel.Item key={product.id}>
                                <img
                                className="d-block mx-auto"
                                src={product.image}
                                alt="Nouveautés"
                                id="imgCarousel"
                                name="imgCarousel"
                                title={product.title}
                                />
                                <Carousel.Caption>
                                <h2 className='title_carousel bg-light p-2 d-block mx-auto'>{product.title}</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                    )
                })
            }
            </Carousel>
        </div>
    );
};

export default CarouselProduct;

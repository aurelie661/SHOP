import React from 'react';
import { useEffect, useState } from 'react';
import '../App.css';


const ModalDetail = (props) => {
    const { product } = props;
    const [currentProduct, setCurrentProduct] = useState(product);

    useEffect(() => {
        setCurrentProduct(product);
    }, [currentProduct]);

    return <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{product?.title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div><img src={product?.image} alt="img" className="img w-75" /></div>

                                <div className="col-9 mx-auto mt-3 text-justify modal-header">
                                    {product?.description}
                                </div>

                                <div className="col-9 mx-auto mt-4 text-end h4 fw-bolder">{product?.price}€</div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ;
}

export default ModalDetail;

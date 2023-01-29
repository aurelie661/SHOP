import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';


const BtnModal = (props) => {
   const { id, onClick } = props;
   const [productId, setId] = useState('');

   useEffect(() => {
      setId(id);
   }, [id]);

   return <Button className='text-decoration-none text-dark' type="button" variant="link" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onClick.bind(this, id)} id={id}>
      Details produit
   </Button>
}

export default BtnModal;


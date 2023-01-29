import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { FaComment, FaShoppingBasket, FaUser, FaUserLock, FaSignInAlt, FaSignOutAlt, FaHouseUser } from "react-icons/fa";
import Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../App.css';

const NavigationBar = (props) => {
    const { auth } = useContext(AuthContext);
    const [genders, setGenders] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/gender`, {
        method: "GET",
        headers: { "content-type": "application/json" },
        })
        .then((resp) => resp.text())
        .then((text) => {
            const data = text.toJson();
            setGenders(data);
        })
        .catch(console.log());

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
        <>
            <Link to="/" className="myTitle">Safia Boutique</Link>
            <Navbar  expand="lg" className="myCol">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggleNav" />                 
                    <Navbar.Collapse id="basic-navbar-nav" className="toggleNav">
                        <Nav className="me-auto">
                            {genders.map(gender => {
                                return (
                                    <li className="nav-item" key={gender.id}>
                                        <Link className="nav-link myNav" to={"/"+gender.title}>{gender.title}</Link>
                                    </li>
                                );
                            })}
                        </Nav>
                        <Form className="d-flex mt-1 mb-1">
                            {auth.role === 2 &&(
                                <Link className="mx-2" to="/admin" title="Espace administration"><FaUserLock/></Link>
                            )}
                            {auth.role === 0 &&(
                                <Link className="mx-2" to="/register" title="Inscription"><FaUser/></Link>
                            )}
                            {auth.role === 0 &&(
                                <Link className="mx-2" to="/login" title="Connexion"><FaSignInAlt/></Link>
                            )}
                            {auth.role > 0 &&(
                                <Link className="mx-2" to="/account" title="Votre profil"><FaHouseUser/></Link>
                            )}
                            {auth.role > 0 &&(
                                <Link className="mx-2" to="/logout" title="Deconnexion"><FaSignOutAlt/></Link>
                            )}
                            {auth.role === 0 &&(
                            <Link className="mx-2" to="/contact" title="Contactez-nous"><FaComment/></Link>
                            )}
                            {auth.role === 1 &&(
                            <Link className="mx-2" to="/contact" title="Panier"><FaShoppingBasket/></Link>
                            )}
                        </Form>
                    </Navbar.Collapse>                  
                </Container>
            </Navbar>
        </>
    );
}
export default NavigationBar;
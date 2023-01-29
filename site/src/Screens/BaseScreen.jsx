import NavigationBar from '../Components/NavigationBar';
import TextScroller from "../Components/TextScroller";
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import React from 'react';

const BaseScreen = () => {
  
  let message = "** Livraison gratuite à partir de 79€ sur toutes les commandes en point de relais **";

  return (
    <>
        <NavigationBar/>
        <TextScroller text={message}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default BaseScreen;
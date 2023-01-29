import React from 'react';
import { Link } from 'react-router-dom';
import './css/error.css';

const Error = (props) => {

    return (
        <>
            <div className="container">
                <div id="clouds">
                    <div className="cloud x1"></div>
                    <div className="cloud x2"></div>
                    <div className="cloud x3"></div>
                    <div className="cloud x4"></div>
                    <div className="cloud x5"></div>
                </div>

                <div id="global">
                    <div id="title" >
                        <span className="h5 posAbsolute mt_1-8em  text-light">LE &nbsp; </span>
                        <span className="h1 colorPink ml-2em  text-light"> 404</span>
                        <span className="h5 ml-1em  text-light">COCKTAIL</span>
                        <span className="h5 txt-italic ml-1em  text-light">(Alias Page inexistante)</span>
                    </div>

                    <div id="content">
                        <div id="img"><img src="https://www.cocktails-faciles.fr/logoCF404.png" alt="" className="w-100" /></div>

                        <div className="max-width70 float-left padding3em  text-light">
                            <div className="stitre">INGREDIENTS</div>
                            <div className="txt">404 doses de <b>Oops</b></div>
                            <div className="txt">404 doses de <b>Page not found</b></div>
                            <br />
                            <div className="stitre">PREPARATION</div>
                            <div className="txt">1/ Se rendre sur une page inexistante</div>
                            <div className="txt">2/ Cliquer <Link to="/">ICI</Link> pour revenir &agrave; l'accueil</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;

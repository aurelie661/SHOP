import '../App.css';
// import { BsFacebook } from 'react-icons/Bs';
// import { ImMail4 } from 'react-icons/Im';
// import { FaPhoneSquareAlt } from 'react-icons/Fa';


const Footer = (props) => {
    return (
        <footer className="page-footer font-small cyan darken-3 myFooter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="flex-center">
                            <a className="fb-ic">
                                {/* <i className="bi bi-arrow-90deg-up"><BsFacebook/></i> */}
                            </a>
                            <a className="gplus-ic">
                                {/* <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"><ImMail4/></i> */}
                            </a>
                            <a className="ins-ic">
                                {/* <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"><FaPhoneSquareAlt/></i> */}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="text-center py-3 myFooter"> 2022 Copyright ©
                <span> ShopOnline.com</span>
            </div>
        </footer>
    )
}

export default Footer;

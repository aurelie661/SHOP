import '../App.css';
import React, { useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit =(evt) => {
      evt.preventDefault();
      const form = evt.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
        fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body,
        }).then((resp) => resp.text())
          .then((text) => {
              const data = text.toJson();
              if(data.result){
                  document.cookie = `auth=${data.token};max-age=${60*60*24}`;
                  setAuth({role: data.role});
                  navigate('/account');
              }
              else{
                  document.cookie = `auth=null;max-age=0`;
                  setAuth({role: 0});
                  console.log(false);
              }
          });
  }

  return (

    <div className="container contact">
      <div className='col-4 mx-auto form form-group row'>
        <form id="contact-form" onSubmit={handleSubmit} className="needs-validation">
          <fieldset>
            <legend className='text-center title_form'>Connexion</legend>
              <div className="row">
                  <div className="form-group mb-3 mt-3">
                      <label htmlFor='login' className='label_form mb-2'>Email</label>
                      <input type="email" className="form-control" placeholder="Marie@gmail.com" aria-label="login" name='login' id='login' required></input>
                  </div>
                  <div className="form-group mb-3 mt-3">
                      <label htmlFor='password' className='label_form mb-2'>Mot de passe</label>
                      <input type="password" className="form-control" placeholder="********" aria-label="password" name='password' id='password' required></input>
                      <Link className='nav-link label_form' to="/">Mot de passe oublié</Link>
                  </div> 
              </div>
            <button type="submit" className="btn mt-3 mb-3 button">Valider</button>
                  <Link className='nav-link label_form' to="/register">Pas de compte ?</Link>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Login;
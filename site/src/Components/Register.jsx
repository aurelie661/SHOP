import '../App.css';
import React, { useContext, useEffect } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(4);
  })

  const handleSubmit =(evt) => {

      evt.preventDefault();
      let user_captcha_value = document.getElementById("user_captcha_input").value;

      if (validateCaptcha(user_captcha_value) === true) {
      const form = evt.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);
      let bodyJson = JSON.parse(body);
      delete bodyJson.user_captcha_input;
      bodyJson = JSON.stringify(bodyJson);
      
      fetch("http://localhost:5000/auth/register", {
        method: "put",
        headers: {"content-type":"application/json"},
        body: bodyJson
      }).then((resp) => resp.text())
      .then((text) => {
          const data = text.toJson();
          if(data.result){
              document.cookie = `auth=${data.token};max-age=${60*60*24}`;
              setAuth({role: data.role});
              navigate("/login");
          }
          else{
              document.cookie = `auth=null;max-age=0`;
              setAuth({role: 0});
              console.log(false);
          }
      });
    } else {
      console.log("Captcha Does Not Match");
    }
  
      
  }


  return (
    <div className="container contact">
      <div className='col-4 mx-auto form form-group row'>
        <form id="contact-form" onSubmit={handleSubmit} className="needs-validation">
          <fieldset>
            <legend className='text-center title_form'>Inscription</legend>
              <div className="row">
                  <div className="form-group mb-3 mt-3">
                      <label htmlFor='login' className='label_form mb-2'>Email</label>
                      <input type="email" className="form-control" placeholder="Marie@gmail.com" aria-label="login" name='login' id='login' required></input>
                  </div>
                  <div className="form-group mb-5 mt-3">
                      <label htmlFor='password' className='label_form mb-2'>Mot de passe</label>
                      <input type="password" className="form-control" placeholder="***********" aria-label="password" name='password' id='password' required></input>
                  </div>
                  <LoadCanvasTemplate />
                  <Form.Control className="mb-3 mx-auto w-25 mt-2" type='text' name="user_captcha_input" id='user_captcha_input' required/>
              </div>
            <button type="submit" className="btn mt-3 mb-3 button">Valider</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Register;
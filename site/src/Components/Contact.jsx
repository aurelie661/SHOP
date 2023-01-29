import React, { useState } from 'react';
import { Alert, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../App.css';

const Contact = () => {
  const [alertSucess, setAlertSucess] = useState(false);
  const [alertDanger, setAlertDanger] = useState(false);

  const handleSubmit =(evt) => {

      evt.preventDefault();
      const form = evt.currentTarget;
      const formData = new FormData(form);
      const jsonData = Object.fromEntries(formData.entries());
      const body = JSON.stringify(jsonData);

      fetch("http://localhost:5000/contact", {
        method: "put",
        headers: {"content-type":"application/json"},
        body
      })
      .then(resp => resp.text())
      .then(console.log)
      .catch(console.error)
      
  }
      const ShowAlert = () => {
          setAlertSucess(true);
      }


  return (
    <div className="container contact">
      {alertSucess === true ?
          <Alert variant="sucess">Votre message à bien été envoyé.</Alert>
          :
          null
      }
      <div className='col-4 mx-auto form form-group row'>
        <form id="contact-form" onSubmit={handleSubmit} className="needs-validation">
        <fieldset>
          <legend className='text-center title_form'>Contactez nous</legend>
            <div className="row">
              <div className="form-group mb-3 mt-3">
              <label htmlFor='firstname' className='label_form mb-2'>Prénom</label>
                <input type="text" className="form-control" placeholder="Marie" aria-label="prenom" name='firstname' id='firstname' required></input>             
              </div>
              <div className="form-group mb-3 mt-3">
                <label htmlFor='lastname' className='label_form mb-2'>Nom</label>
                <input type="text" className="form-control" placeholder="Dufour" aria-label="nom" name='lastname' id='lastname' required></input>
              </div>
              <div className="form-group mb-3 mt-3">
                  <label htmlFor='email' className='label_form mb-2'>e-mail</label>
                  <input type="email" className="form-control" placeholder="marie.dufouor@gmail.com" aria-label="email" id="email" name="email" required></input>
              </div>
              <div className="form-group mb-3 mt-3">
                  <label htmlFor='message' className='label_form mb-2'>Votre message</label>
                  <Form.Control as="textarea" style={{ height: '100px'}} name="message" required />  
              </div>
            </div>
              <button type="submit" className="btn button mt-3 mb-3" onClick={()=> ShowAlert()}>Valider</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Contact;
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {LoginSchema} from '../validation/loginError'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [loginError, setLoginError] = useState()
  const URL = useNavigate()

  const handleSubmit = async (values) =>{
    try {

      const response = await axios.post('http://localhost:3001/login',{
        email: values.email,
        password: values.password
      })

      
      if(values.email === response.data.email && values.password === response.data.password) 
        URL('/preco')
      else throw new Error()

    } catch (error) {
      setLoginError('Senha ou Email está incorreto')
    }

  }

  return (
    <div className='container'>
      <h1>Login</h1>
      <Formik
         initialValues={{ email: '', password: '' }}
         validationSchema={LoginSchema}
         onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <Field type="email" name="email" id="email" className="form-control"></Field>
            <ErrorMessage name="email"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="password" className="form-label">password</label>
            <Field type="password" name="password" id="password" className="form-control"></Field>
            <ErrorMessage name="password"></ErrorMessage>
          </div>
          <br/>
          <button type='submit' className="btn btn-primary">Login</button>
        </Form>

      </Formik>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default Login;

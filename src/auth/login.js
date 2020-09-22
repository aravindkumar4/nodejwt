import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email().strict().trim().required('Email is required'),
      password: yup.string().strict().trim().required('Password is required'),
    }),
    onSubmit: (userInputData) => {
      //console.log(userInputData);
      axios
        .post('http://localhost:7777/api/login', userInputData)
        .then((res) => {
          localStorage.setItem('auth', JSON.stringify(res.data));
          props.history.push('/home');
          // props.history.push('/home');
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });
  return (
    <div className='container mt-3'>
      <div className='jumbotron'>
        <form autoComplete='off' onSubmit={formik.handleSubmit}>
          <div className='form-group'>
            <label>Email:</label>
            <input
              className='form-control'
              type='text'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            ></input>
            {formik.errors.email ? (
              <div className='text-danger'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='form-group'>
            <label>password:</label>
            <input
              className='form-control'
              type='text'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            ></input>
            {formik.errors.password ? (
              <div className='text-danger'>{formik.errors.password}</div>
            ) : null}
          </div>

          <button className='btn btn-primary' type='submit'>
            submit
          </button>
          <a
            href='#'
            onClick={() => {
              window.location.href = 'Register';
            }}
          >
            Register
          </a>
        </form>
      </div>
    </div>
  );
};
export default Login;

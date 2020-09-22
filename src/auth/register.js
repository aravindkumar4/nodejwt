import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required('name is required')
        .strict()
        .trim()
        .min(5, 'minimun 5 chars required')
        .max(15, 'maximun 15 chars only'),
      email: yup.string().email().strict().trim().required('Email is required'),
      password: yup.string().strict().trim().required('Password is required'),
      confirmPassword: yup
        .string()
        .oneOf(
          [yup.ref('password'), null],
          'Conform password and password must be same'
        )
        .required('Confirm  password is required'),
    }),
    onSubmit: (userInputData) => {
      //console.log(userInputData);
      axios
        .post('http://localhost:7777/api/register', userInputData)
        .then((res) => {
          toast.success('user registered successfully');
          props.history.push('/login');
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
            <label>Name</label>
            <input
              className='form-control'
              type='text'
              name='name'
              onChange={formik.handleChange}
              value={formik.values.name}
            ></input>
            {formik.errors.name ? (
              <div className='text-danger'>{formik.errors.name}</div>
            ) : null}
          </div>
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

          <div className='form-group'>
            <label>Conform password:</label>
            <input
              className='form-control'
              type='text'
              name='confirmPassword'
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
            ></input>
            {formik.errors.confirmPassword ? (
              <div className='text-danger'>{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <button className='btn btn-primary' type='submit'>
            submit
          </button>
          <a
            href='#'
            onClick={() => {
              window.location.href = 'Login';
            }}
          >
            Login
          </a>
        </form>
      </div>
    </div>
  );
};
export default Register;

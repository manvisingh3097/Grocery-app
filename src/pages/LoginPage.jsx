import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import Endpoints from '../api/Endpoints';

const LoginPage = () => {
    const [requestedResponse, setRequestedResponse] = useState({
        textMessage: "",
        alertClass: ""
    });


    const initialValues = {
        
        email: '',
        
        password: '',
    };

    const onSubmit = (values) => {
        console.log(values);
       
    };

    const validationSchema = Yup.object({
        
        email: Yup.string()
            .required('Email name is required')
            .email('email must be a valid email'),
        
        password: Yup.string()
            .required('Password must be valid')
            .min(6, 'Password must be at least 6 Characters'),
    });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <div class={requestedResponse.alertClass} role="alert">
                            {requestedResponse.textMessage}
                        </div>
                        <h2>Login page </h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>

                           
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name='email'
                                    id='email'
                                    className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"}
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />

                                {formik.errors.email && formik.touched.email ? (
                                    <small className='text-danger'>
                                        {formik.errors.email}
                                    </small>
                                ) : null}

                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name='password'
                                    id='password'
                                    className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"}
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.password && formik.touched.password ? (
                                    <small className='text-danger'>
                                        {formik.errors.password}
                                    </small>
                                ) : null}
                            </div>
                            <input type="submit"
                                value="Login"
                                className="btn btn-primary btn-block"
                                disabled={!formik.isValid} />
                        </form>
                        <br />
                        <p className="text-center">
                            New user ?  <a href='/register'> Click Here </a>
                        </p>
                    </div>
                </div>
                <div className='col-md-3'> </div>
            </div>
        </div>
    )
}

export default LoginPage;

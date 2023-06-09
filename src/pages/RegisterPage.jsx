import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import Endpoints from '../api/Endpoints';

const RegisterPage = () => {
    const [requestedResponse, setRequestedResponse] = useState({
        textMessage: "",
        alertClass: ""
    });


    const initialValues = {
        firstName: '',
        email: '',
        mobile: '',
        password: '',
    };

    const onSubmit = (values) => {
        console.log(values);
        axios.post(Endpoints.REGISTER_URL, values)
            .then((response) => {
                console.log(response);
                setRequestedResponse({
                    textMessage: response.data.message,
                    alertClass: "alert alert-success"
                })

            }, (error) => {
                console.log(error);
                setRequestedResponse({
                    textMessage: error.response.data.message,
                    alertClass: "alert alert-danger"
                })
            })
            .catch(error => console.log(error));
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First name is required'),
        email: Yup.string()
            .required('Email name is required')
            .email('email must be a valid email'),
        mobile: Yup.string()
            .required('Mobile is required'),
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
                        <h2>Register</h2>
                        <hr />
                        <form onSubmit={formik.handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name='firstName'
                                    id='firstName'
                                    className={formik.touched.firstName && formik.errors.firstName ? "form-control is-invalid" : "form-control"}
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.firstName && formik.touched.firstName ? (
                                    <small className='text-danger'>
                                        {formik.errors.firstName}
                                    </small>
                                ) : null}
                            </div>
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
                                <label htmlFor="mobile">
                                    Mobile
                                </label>
                                <input
                                    type="text"
                                    name='mobile'
                                    id='mobile'
                                    className={formik.touched.mobile && formik.errors.mobile ? "form-control is-invalid" : "form-control"}
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.mobile && formik.touched.mobile ? (
                                    <small className='text-danger'>
                                        {formik.errors.mobile}
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
                                value="Register"
                                className="btn btn-primary btn-block"
                                disabled={!formik.isValid} />
                        </form>
                        <br />
                        <p className="text-center">
                            Already Registered? <a href='/login'> Click Here </a>
                        </p>
                    </div>
                </div>
                <div className='col-md-3'> </div>
            </div>
        </div>
    )
}

export default RegisterPage;

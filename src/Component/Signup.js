
import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';



export const Signup = () => {

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        phoneNumber: Yup.string()
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Phone number is not valid"
            )
            .min(10, 'Must be 10 Number')
            .max(10, 'Must be 10 Number or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                phoneNumber: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 mx-4 font-weight-bold .display-5">Create an account</h1>
                    <Form className='container-fluid'>
                        <TextField label="Your email address" name="email" type="email" />
                        <TextField label="Your password" name="password" type="password" />
                        <TextField label="Confirm your Password" name="confirmPassword" type="password" />
                        <TextField label="Your full Name" name="firstName" type="text" />
                        <TextField label="Your phone number" name="phoneNumber" type="number" />
                        <Link to="/chart">
                            <button className="btn btn-primary mt-3 " type="submit">Create an account</button>
                        </Link>
                        <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}
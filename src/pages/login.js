import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if(!values.userName) {
        errors.userName = 'Required';
    } else if(values.userName.length > 15) {
        errors.userName = 'Must be 15 characters or less';
    }
    if(!values.password){
        errors.password = 'Required';
    }else if(values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }
    if(!values.email) {
        errors.email = 'Required';
    } 
    //else if(values) {
      //  errors.email = 'Invalid email address';
    //}
    return errors;



    
};

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    
    return (
        <>
        <div id= "test">
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="userName">User Name</label>
            <input
                id="userName"
                name="userName"
                type="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                placeholder="userName"
            />          
            {formik.touched.userName && formik.errors.userName ? <div id = "errorss">{formik.errors.userName}</div> : null}
            <label htmlFor="password">password</label>
            <input 
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="password"
            />
            {formik.touched.password && formik.errors.password ? <div id = "errorss">{formik.errors.password}</div> : null}
            <label htmlFor="email">Email Address</label>
            <input 
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="email"
            />
            {formik.touched.email && formik.errors.email ? <div id = "errorss">{formik.errors.email}</div> : null}
            <button type="submit">Submit</button>
        </form>
        </div>
        </>
    );
};

export default LoginForm;
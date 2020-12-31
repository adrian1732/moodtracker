import React from 'react';
import {useFormik} from 'formik';

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values,null, 2));
        },
    });
}
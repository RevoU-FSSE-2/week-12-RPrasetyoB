import * as yup from 'yup';

export const personalInfoValidation = yup.object().shape({
    fullName: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    birthdate: yup.date().required('Birthday is required')
        // .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        // "Date of birth must be in the format DD/MM/YYYY")
        .test("age", "You must be at least 17 years old",
        (value) => {
            const dob = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            return age >= 17;
        })        
});

export const addressInfoValidation = yup.object().shape({
    street: yup.string().required('Street address required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zipCode: yup.string()
        .matches(/^[0-9]{5}$/, "Must be exactly 5 digits")
        .required("Zip code is required"),
})

export const accountInfoValidation = yup.object().shape({
    userName: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "Password must be alphanumeric")
})
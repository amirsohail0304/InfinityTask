import * as yup from 'yup';

export const SignUpSchema = yup.object().shape({
    email: yup.string()
        .required('Email field is required')
        .email("Email is not correct"),
    fName: yup.string().trim()
        .required('first name field is required')
        .min(2, 'Too short')
        .max(50, 'Too long'),
    lName: yup.string().trim()
        .required('last name field is required')
        .min(2, 'Too short')
        .max(50, 'Too long'),
    password: yup.string().trim()
        .required('Password field is required')
        .min(8, 'Too short')
        .max(30, 'Too long')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match'),
    termsandconditions: yup.boolean().oneOf([true], " accept terms and condition"),
    phoneNo: yup.string()
        .required('phone no is require')
        .matches(
            /^(\+?\d{1,3}[- ]?)?\d{10}$/,
            "phone No are not valid"
        ),
});

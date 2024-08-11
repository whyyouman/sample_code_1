import * as Yup from 'yup';

/**
 * Validation schema for the login form.
 * 
 * This schema uses Yup to define validation rules for the login form fields:
 * - email: Must be a non-empty string
 * - password: Must be a non-empty string
 * 
 * Both fields are required, and appropriate error messages will be displayed
 * if they are left empty.
 */
export const loginValidation = Yup.object({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
});
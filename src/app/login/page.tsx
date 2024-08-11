"use client"
import { useEffect } from "react";
import styles from './login.module.css';
import Input from '../../../components/fields/Input';
import Button from '../../../components/fields/Button';
import Logo from '../../../components/logo';

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { loginValidation } from '../../../utils/validation';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducer/authReducer';
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";


export default function Login() {

    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (auth.isAuthenticated) {
            router.push('/');
        }
    }, [auth]);

    // Initialize formik hook for form handling
    const formik = useFormik({
        // Set initial form values
        initialValues: {
            email: '',
            password: '',
        },
        // Set validation schema
        validationSchema: loginValidation,
        // Define submit handler
        onSubmit: (values) => {
            if (values.email == "admin@emb.com" && values.password == "admin") {
                dispatch(login({
                    token: "1234567890",
                    user: {
                        name: "Admin",
                        email: "admin@emb.com"
                    }
                }));
                router.push('/');
            }
        },
    });

    return (
        <>
            <section className={styles.loginContainer}>
                <div className={`row ${styles.loginContainer}`}>
                    <div className='col-md-8'>
                        <div className={styles.loginImage} />
                    </div>
                    <div className='col-md-4'>
                        <div className='row'>
                            <div className='col-sm-12 p-5'>
                                <div className='cursor-pointer'><FontAwesomeIcon icon={faArrowLeft} width={15} /> Back</div>
                            </div>
                        </div>
                        <div className={styles.loginCentered}>
                            <div className={`card ${styles.loginCard}`}>
                                <div className="card-body">
                                    <div>
                                        <Logo />
                                    </div>
                                    <div className='pt-5'>
                                        <h2>Sign in</h2>
                                        <span className={styles.loginSubHeading}>Log In to Experience the Best of Our Services.</span>
                                    </div>
                                    <div className='pt-5'>
                                        <form onSubmit={formik.handleSubmit}>
                                            <Input
                                                label="Email"
                                                placeholder="Enter your email"
                                                type="email"
                                                name="email"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.errors.email ?? ''}
                                                touched={formik.touched.email ?? false}
                                            />
                                            <Input
                                                label="Password"
                                                placeholder="Enter your password"
                                                type="password"
                                                name="password"
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                error={formik.errors.password ?? ''}
                                                touched={formik.touched.password ?? false}
                                            />
                                            <Button type="submit" label="Submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
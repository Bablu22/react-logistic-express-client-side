import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../../images/google.png'
const Login = () => {

    const { googleSignIn, logInEmilPassword, resetPassword } = useAuth();
    const [error, setError] = useState('')
    const history = useHistory()
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailInput = e => {
        setEmail(e.target.value)
    }
    const passwordInput = e => {
        setPassword(e.target.value)
    }


    const logInGoogle = () => {
        googleSignIn()
            .then(result => {
                history.push(location.state?.from || '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const emailLogIn = (email, password) => {
        logInEmilPassword(email, password)
            .then(result => {
                history.push(location.state?.from || '/')
            })
            .catch(error => {
                console.log(error.message);
                if (error.message === "Firebase: Error (auth/wrong-password).") {

                    setError("Wrong password")
                }
                if (error.message === "Firebase: Error (auth/user-not-found).") {

                    setError('User Not Found')
                }
                if (error.message === "Firebase: Error (auth/invalid-email).") {

                    setError('Invalid Email & Password')
                }

                if (error.message === "Firebase: Error (auth/email-already-in-use).") {

                    setError('email-already-in-use')
                }
                else {

                }

            })

    }






    return (
        <div>
            <div className="container mx-auto p-5">
                <section className="flex justify-center flex-col md:flex-row h-screen items-center">



                    <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen p-6 lg:px-16 xl:px-12 flex items-center border border-gray-200 justify-center">

                        <div className="w-full h-100">

                            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-2">Log in to your account</h1>
                            <h1 className="text-xl text-red-500 italic">{error}</h1>
                            <div className="mt-6">
                                <div>
                                    <label className="block text-gray-700">Email Address</label>
                                    <input
                                        onBlur={emailInput}
                                        type="email"
                                        name=""
                                        id="email"
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none" autoFocus
                                        autoComplete="true"
                                        required />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        onBlur={passwordInput}
                                        type="password"
                                        name=""
                                        id="password"
                                        placeholder="Enter Password"
                                        minLength="6"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                                        required />
                                </div>

                                <div className="text-right mt-2">
                                    <a href="#/" onClick={() => resetPassword(email)} className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                                </div>

                                <button
                                    onClick={() => emailLogIn(email, password)}
                                    type="submit"
                                    className="w-full block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg px-4 py-3 mt-6 cursor-pointer">Log In</button>
                            </div>

                            <hr className="my-6 border-gray-300 w-full" />

                            <button
                                onClick={logInGoogle}
                                type="button"
                                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                <div className="flex justify-evenly">
                                    <img src={google} alt="" />
                                    <span>Log in with google</span>
                                </div>
                            </button>

                            <p className="mt-8 text-center">Need an account?
                                <Link
                                    className="text-blue-500 hover:text-blue-700 font-semibold"
                                    to="/signup">Create an account</Link>
                            </p>
                        </div>
                    </div>

                </section>
            </div>
        </div>

    );
};

export default Login;
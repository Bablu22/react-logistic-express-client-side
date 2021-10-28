import { getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../../images/google.png'

const Signup = () => {

    const { signupEmailPassword, googleSignIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth()
    const history = useHistory()
    const location = useLocation()

    const emailInput = e => {
        setEmail(e.target.value)
    }
    const passwordInput = e => {
        setPassword(e.target.value)
    }
    const nameInput = e => {
        setName(e.target.value)
    }

    const createAccount = (email, password, name) => {
        signupEmailPassword(email, password, name)
            .then(result => {
                history.push(location.state?.from || '/')
            })
            .catch(error => {

                if (error.message === "Firebase: Error (auth/invalid-email)") {

                    setError("Please fill all the input")
                }
                if (error.message === "Firebase: Error (auth/internal-error).") {

                    setError('Please Input Valid Email')
                }
                if (password === '' && email === '') {
                    setError('Please fill emial and password')
                }
                if (password === '') {
                    setError('Please fill password')
                }
                if (email === '') {
                    setError('Please fill Email')
                }
                if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {

                    setError('Password should be at least 6 characters')
                }
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {

                    setError('email-already-in-use')
                }
                else {

                }

            })
    }
    // Update profile
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: ""
    }).then(() => {
        // Profile updated!
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });


    return (
        <div className="container mx-auto p-5">
            <section className="flex justify-center flex-col md:flex-row h-screen items-center">



                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen p-6 lg:px-16 xl:px-12 flex items-center border border-gray-200 justify-center">

                    <div className="w-full h-100">
                        <h1 className="text-xl md:text-2xl italic font-bold leading-tight mt-3">Create your account</h1>


                        <p className="text-xl text-red-500 italic mt-0">{error}</p>
                        <div className="mt-6">
                            <div>
                                <label className="block text-gray-700">Your Name</label>
                                <input
                                    onBlur={nameInput}
                                    type="text"
                                    name=""
                                    id="nameID"
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-2 rounded-lg border-gray-400 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                    autoComplete="true"
                                    required />
                            </div>
                            <div>
                                <label className="mt-4 block text-gray-700">Email Address</label>
                                <input
                                    onBlur={emailInput}
                                    type="email"
                                    name=""
                                    id="emailID"
                                    placeholder="Enter Email Address"
                                    className="w-full px-4 py-2 rounded-lg border-gray-400 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus
                                    autoComplete="true"
                                    required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    onBlur={passwordInput}
                                    type="password"
                                    name=""
                                    id="passwordID"
                                    placeholder="Enter Password"
                                    minLength="6"
                                    className="w-full px-4 py-2 rounded-lg border-gray-400 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                    required />
                            </div>

                            <button
                                onClick={() => createAccount(email, password, name)}
                                type="submit"
                                className="w-full block bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg  transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300  font-semibold rounded-lg px-4 py-1 mt-6">Create account</button>
                        </div>

                        <hr className="my-6 border-gray-300 w-full" />

                        <button
                            onClick={googleSignIn}
                            type="button"
                            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                            <div className="flex justify-evenly">
                                <img src={google} alt="" />
                                <span>SignUp with google</span>
                            </div>
                        </button>

                        <p className="mt-8 text-center">Already have an account?

                            <Link
                                className="text-blue-500 hover:text-blue-700 font-semibold"
                                to="/login">Login</Link>
                        </p>


                    </div>
                </div>


            </section>

        </div>
    );
};

export default Signup;
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.webp'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-900 relative pt-1">
                <div className="container mx-auto px-6">

                    <div className="sm:flex sm:mt-8">
                        <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col">
                                <div>
                                    <img src={Logo} alt="" />
                                    <p className="text-gray-500 text-sm mt-5"> GThe trade war currently ensuing between te <br /> US anfd several natxions around thdhe globe, <br /> most fiercely with.</p>
                                </div>
                                <div className=" flex mt-10 card-actions text-white">
                                    <div className="icon">
                                        <a href="https://www.facebook.com/" target="blank"><i className="fab text-white fa-facebook-f"></i></a>
                                    </div>

                                    <div className="icon">
                                        <a href="https://twitter.com/" target="blank"><i className="fab text-white fa-twitter"></i></a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://www.google.com/" target="blank"><i className="fab text-white fa-google"></i></a>
                                    </div>
                                    <div className="icon">
                                        <a href="https://www.instagram.com/" target="blank"><i className="fab text-white fa-instagram"></i></a>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col footer-text">
                                <span className="font-bold text-gray-300 uppercase mt-4 md:mt-0 mb-2">COMPANY</span>
                                <span className="my-2"><a href="#/" className="text-blue-700 text-md hover:text-blue-500">About Us</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Company</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700 text-md hover:text-blue-500">Press & Blog</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700 text-md hover:text-blue-500">Privacy Policy</a></span>
                            </div>
                            <div className="flex flex-col footer-text">
                                <span className="font-bold text-gray-300 uppercase mt-4 md:mt-0 mb-2">OPEN HOUR</span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Monday 11am-7pm</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Tuesday-Friday 11am-8pm</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Saturday 10am-6pm</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Sunday 11am-6pm</a></span>
                            </div>
                            <div className="flex flex-col footer-text">
                                <span className="font-bold text-gray-300 uppercase mt-4 md:mt-0 mb-2">RESOURCES</span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Home Insurance</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Travel Insurance</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Car Insurance</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Business Insurance</a></span>
                                <span className="my-2"><a href="#/" className="text-blue-700  text-md hover:text-blue-500">Heal Insurance</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-6">
                    <div className="mt-16 border-t-2 border-yellow-700 flex flex-col items-center">
                        <div className="sm:w-2/3 text-center py-6">
                            <p className="text-lg text-gray-300 font-bold mb-2">
                                Copyright &copy; 2021 by Bablu Mia
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
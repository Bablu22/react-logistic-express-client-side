import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos="fade-up" className="container mx-auto my-10">
            <div className="sm:grid grid-cols-2 gap-4 p-10">
                <div className="w-full">
                    <div className="sm:grid grid-cols-2 gap-5">
                        <div className="p-5 text-center rounded-lg m-2">
                            <i className="fas fa-map-marked-alt text-5xl text-blue-500 py-3"></i>
                            <h3 className="text-xl font-medium py-5">ADDRESS</h3>
                            <p className="text-gray-600">198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                        <div className="p-5 text-center rounded-lg m-2 ">
                            <i className="fas fa-phone-square text-5xl text-blue-500 py-3"></i>
                            <h3 className="text-xl font-medium py-5">CONTACT NUMBER</h3>
                            <p className="text-gray-600">+ 1235 2355 98</p>
                        </div>
                        <div className="p-5 text-center rounded-lg m-2">
                            <i className="fas fa-paper-plane text-blue-500 py-3 text-5xl"></i>
                            <h3 className="text-xl font-medium py-5">EMAIL ADDRESS</h3>
                            <p className="text-gray-600">1info@yoursite.com</p>
                        </div>
                        <div className=" p-5 text-center rounded-lg m-2">
                            <i className="fas fa-blog text-blue-500 py-3 text-5xl"></i>
                            <h3 className="text-xl font-medium py-5">WEBSITE</h3>
                            <p className="text-gray-600">yoursite.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center  shadow-sm border dark:bg-gray-900">
                    <div className="container mx-auto">
                        <div className="max-w-md mx-auto my-10 bg-white p- rounded-md shadow-sm">
                            <div className="text-center">
                                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact Us</h1>
                                <p className="text-gray-400 dark:text-gray-400">Fill up the form below to send us a message.</p>
                            </div>
                            <div className="m-7">
                                <form id="form">
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                        <input type="text" name="name" id="name" placeholder="Name" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="you@gmail.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                                        <textarea rows="5" name="message" id="message" placeholder="Your Message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                    </div>
                                    <div className="mb-6">
                                        <button type="submit" className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;


import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/about.webp'
import './About.css'

const About = () => {
    return (
        <div className="container mx-auto p-10 mt-20">
            <div className="sm:grid grid-cols-2">
                <div className="">
                    <img src={image} alt="" />
                </div>
                <div className="about-text mt-4">
                    <span className="about-span text-3xl">About Our Company</span>
                    <h3 className="section-head sm:text-7xl text-5xl py-4">Safe Logistic & Transport Solutions That Saves Our Valuable Time!</h3>
                    <p className="text-lg text-gray-500">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended. <br /><br />

                        Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                    <button
                        type="submit"
                        className="w-100 block bg-transparent border-2 border-yellow-500 text-white-500 text-lg  transition-colors duration-700 transform hover:bg-yellow-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300  font-semibold rounded-lg px-16 py-1 mt-6">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default About;
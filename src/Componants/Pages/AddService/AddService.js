import React, { useRef } from 'react';
import Toastify from 'toastify-js';

const AddService = () => {

    const nameRef = useRef()
    const imageRef = useRef()
    const ratingRef = useRef()
    const peopleRef = useRef()
    const desRef = useRef()



    const addService = e => {
        e.preventDefault();
        const name = nameRef.current.value
        const img = imageRef.current.value
        const rating = ratingRef.current.value
        const people = peopleRef.current.value
        const description = desRef.current.value
        const newService = { name, img, rating, people, description }
        console.log(newService);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Toastify({
                        text: "Added Sucessfull",
                        duration: 3000,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",

                        }
                        // Callback after click
                    }).showToast();
                    e.target.reset()
                }
            })

    }


    return (
        <div>
            <div>
                <h2 className="text-center w-1/2 mx-auto  text-4xl border-b-2 border-yellow-500  about-span">Add Service</h2>
                <form onSubmit={addService} className="sm:w-9/12 p-5 sm:p-0 mx-auto">
                    <div className="flex flex-col p-5  pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg">

                        <div className="relative pt-4">
                            <label for="name" className="text-base leading-7 text-blueGray-500">Service Name</label>
                            <input required ref={nameRef} type="text" id="name" name="name" placeholder="Service Name" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        </div>
                        <div className="relative pt-4">
                            <label for="name" className="text-base leading-7 text-blueGray-500">Service Image</label>
                            <input required ref={imageRef} type="text" id="number" name="number" placeholder="Service Image" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        </div>
                        <div className="relative mt-4">
                            <label for="name" className="text-base leading-7 text-blueGray-500">Select Rating</label>
                            <select required ref={ratingRef} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                <option >1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="relative pt-4">
                            <label for="name" className="text-base leading-7 text-blueGray-500">Total Rating</label>
                            <input ref={peopleRef} type="text" id="number" name="number" placeholder="People" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" min="1" max="3" required />
                        </div>

                        <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                            <div className="w-full px-3">
                                <label className="text-base leading-7 text-blueGray-500" for="description">Service Description</label>
                                <textarea ref={desRef} className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" type="text" name="description" placeholder="Service Description" minLength="80" required></textarea>
                            </div>
                        </div>
                        <div className="flex items-center w-full pt-4 mb-4">
                            <button className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "> Button </button>
                        </div>


                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddService;
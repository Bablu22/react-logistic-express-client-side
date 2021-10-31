import React from 'react';
import './OrderForm.css'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


const OrderForm = ({ id }) => {
    const { user } = useAuth()
    const name = (id?.name)
    const img = (id?.img)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onChange" });
    const onSubmit = data => {
        console.log(data)
        data.user = user.photoURL
        data.itemName = name
        data.itemImg = img
        data.status = 'Pending'
        fetch('https://polar-anchorage-43986.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Toastify({
                        text: "Orders Sucessfull",
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
                    reset()
                }
            })
    };
    return (
        <div className="form bg-white w-full p-6 lg:px-16 xl:px-12  border border-gray-200 justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label className="block text-gray-700">Name</label>
                <input placeholder="Name" defaultValue={user.displayName} {...register("name")}
                    required className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                />

                {/* include validation with required or other standard HTML validation rules */}
                <label className="block text-gray-700 mt-3">Email</label>
                <input defaultValue={user.email} {...register("email", { required: true })}
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                />
                {/* errors will return when field validation fails  */}
                <label className="block text-gray-700 mt-3">Service</label>
                <input defaultValue={name} {...register("order")} required
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                />
                <label className="block text-gray-700 mt-3">Date</label>
                <input type="date" {...register("date")}
                    required className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <label className="block text-gray-700 mt-3">Address</label>
                <input placeholder="Address" {...register("address")} required
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                />
                <label className="block text-gray-700 mt-3">Phone Number</label>
                <input placeholder="Number" {...register("phone")} required
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-0 focus:bg-white focus:outline-none"
                />
                <input
                    className="w-full block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg px-4 py-3 mt-6 cursor-pointer"
                    type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default OrderForm;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name, 
            email, 
            img,
            date, 
            service: title,
            service_id: _id, 
            price: price
        }

        console.log(booking);

        // fetch('http://localhost:5000/bookings', {
        //     method: 'POST', 
        //     headers: {
        //         'content-type': 'application/json'
        //     }, 
        //     body: JSON.stringify(booking)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if(data.insertedId){
        //         alert('service book successfully')
        //     }
        // })

    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold text-gray-700'>Book Service: {title}</h2>
            <section className="text-gray-600 min-h-screen p-4">
                <div className="h-full lg:max-w-5xl max-w-2xl mx-auto">

                    <div className="relative px-4 sm:px-6 lg:px-8 pb-8 mx-auto">
                        <div>
                            <form onSubmit={handleBookService}>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="card-nr">
                                            Name
                                        </label>
                                        <input
                                            id="card-nr"
                                            className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                            type="text"
                                            name='name'
                                            defaultValue={user?.displayName}
                                        />
                                    </div>
                                    <div className="flex space-x-4">
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium mb-1" htmlFor="card-date">
                                                Date
                                            </label>
                                            <input
                                                id="card-date"
                                                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                type="date"
                                                name="date"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-sm font-medium mb-1" htmlFor="card-email">
                                                Email
                                            </label>
                                            <input
                                                id="card-email"
                                                className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                                type="email"
                                                name='email'
                                                placeholder="Email"
                                                defaultValue={user?.email}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="card-price">
                                            Due Amount
                                        </label>
                                        <input
                                            id="card-price"
                                            className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                            type="text"
                                            defaultValue={'$ '+price}$
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1" htmlFor="card-email">
                                            Email
                                        </label>
                                        <input
                                            id="card-email"
                                            className="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full"
                                            type="email"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="mb-4">
                                        <input className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2" type='submit' value="Order Confirm">
                                            Confirm Order
                                        </input>
                                    </div>
                                    <div className="text-xs text-gray-500 italic text-center">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CheckOut;

import { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    console.log(services);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="text-center mb-10">
                <span className='text-orange-600 text-sm font-bold'>Our Service</span>
                <h1 className="text-5xl font-bold text-gray-800 capitalize lg:text-3xl">Our Service Area: {services.length}</h1>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service = {service}
                    ></ServiceCard>
                    )
                }
            </div>
        </div>
    )
}

export default Services
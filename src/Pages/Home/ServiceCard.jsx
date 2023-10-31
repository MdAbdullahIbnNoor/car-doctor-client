import React from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, description } = service;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white h-[410px] rounded-xl shadow-xl">
            <div className="card bg-base-300">
                <figure className="px-0 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl h-48 w-80" />
                </figure>
                <div className="card-body items-start flex-col justify-start">
                    <h2 className="text-xl text-orange-500 font-semibold card-title">{title}</h2>
                    <p>{description.slice(0, 50)}</p>
                    <div className='card-actions '>
                        <Link to={`/checkout/${_id}`}>
                            <button className='btn btn-neutral'>Book Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceCard
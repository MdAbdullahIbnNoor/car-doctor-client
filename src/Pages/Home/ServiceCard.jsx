import React from 'react'

const ServiceCard = ({service}) => {
    const {img, title, description} = service;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white h-[370px] rounded-xl shadow-xl">
            <div className="card bg-base-200">
                <figure className="px-0 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-left">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p>{description.slice(0, 50)}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
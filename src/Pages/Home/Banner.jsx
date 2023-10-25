import bannerImg from './../../assets/images/banner/5.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[600px] rounded-xl" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content h-[400px]">
                <div className="max-w-7xl">
                    <div className="carousel w-full lg:h-[400px]">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className="flex flex-col space-y-5 w-1/3 ml-10">
                                <h2 className="text-6xl font-bold text-left text-white mb-5">Affordable Price For Car Servicing</h2>
                                <p className="text-lg text-white text-left">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className="flex gap-7">
                                    <button className="btn btn-error text-white w-1/2">Discover More</button>
                                    <button className="btn btn-outline btn-info w-1/2">Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 right-5 -bottom-5">
                                <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                                <a href="#slide2" className="btn btn-circle bg-red-600 border-0 text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className="flex flex-col space-y-5 w-1/3 ml-10">
                                <h2 className="text-6xl font-bold text-left text-white mb-5">Affordable Price For Car Servicing</h2>
                                <p className="text-lg text-white text-left">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className="flex gap-7">
                                    <button className="btn btn-error text-white w-1/2">Discover More</button>
                                    <button className="btn btn-outline btn-info w-1/2">Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 right-10 -bottom-5">
                                <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                                <a href="#slide3" className="btn btn-circle bg-red-600 border-0 text-white">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className="flex flex-col space-y-5 w-1/3 ml-10">
                                <h2 className="text-6xl font-bold text-left text-white mb-5">Affordable Price For Car Servicing</h2>
                                <p className="text-lg text-white text-left">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <div className="flex gap-7">
                                    <button className="btn btn-error text-white w-1/2">Discover More</button>
                                    <button className="btn btn-outline btn-info w-1/2">Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 right-5 -bottom-5">
                                <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                                <a href="#slide1" className="btn btn-circle bg-red-600 border-0 text-white">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
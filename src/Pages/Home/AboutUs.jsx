import img1 from '../../assets/images/about_us/person.jpg';
import img2 from '../../assets/images/about_us/parts.jpg';
import img3 from '../../assets/images/banner/4.jpg';

const AboutUs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-36 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg order-2">
                    <div>
                        <p className='text-sm text-orange-600 font-bold text-left'>About US</p>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans lg:text-5xl font-bold tracking-tight text-gray-900 text-4xl leading-none">
                            We are qualified
                            <br className="hidden md:block" />
                            & of experience{' '}
                            <span className="inline-block text-orange-600">
                                in this field
                            </span>
                        </h2>
                        <p className="text-sm text-gray-700 md:text-lg mb-5">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                        </p>
                        <p className="text-sm text-gray-700 md:text-lg">
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8 order-1">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src={img1}
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src={img2}
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src={img3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
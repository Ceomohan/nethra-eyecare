import React from 'react'
import logo from '../assets/logo.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa"

const Header = () => {
    const links = [
        { link: "home", path: "home" },
        { link: "About us", path: "About us " },
        { link: "courses Offered", path: "courses" },
        { link: "Infrastructure", path: "Infrastructure" },
        { link: "Facilities", path: "facilities" },
        { link: "News & Events", path: "News" },
        { link: "Gallery", path: "Gallery" },
        { link: "Contact Us", path: "contact" }
    
    
    ]
    

    const content = (
        <div>
            {/*image header and contact information section */}
            <section className=" bg-[#6F2C93] md:w-full max-w-screen-2xl h-[260px] mt-0"  >
                <div>
                    <div className="flex space-x-14 items-center">
                        {/* logo image */}
                        <div>
                            <img src={logo} alt="" className=" px-24 mt-8 inline-block items-center  " />
                        </div>
                        {/* contact and university information */}
                        <div className="flex flex-row     text-white  ">
                            <div className=" space-y-2">
                                <h6 className="lg:flex items-center text-xl ">
                                    <FaPhoneAlt className="mr-5" />
                                    contact us
                                </h6>
                                <p className="mx-10">+91 72009 99431</p>
                            </div>
                            <div className="space-y-2">
                                <h6 className="lg:flex items-center text-xl">
                                    <FaUniversity className="mr-5" />
                                    AU/DCP/872
                                </h6>
                                <p className="mx-10">Approved By Alagappa University</p>

                            </div>


                        </div>
                    </div>
                </div>
                {/* next page links and features section */}
                <div className="mt-6 ">
                    <ul className="md:flex  justify-center space-x-8 hidden text-[#0054A6]  text-[16px]  font-semibold bg-[#b6d2f6]  mx-72 px-6 py-5 rounded-2xl">
                        {
                            links.map(({ link, path }) =>
                                <a key={link} href={path} className="block hover:text-red-600 ">{link}</a>
                            )
                        }
                    </ul>

                </div>
               
            </section>

        </div>

    )



    return content
}

export default Header
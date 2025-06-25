import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
function Header() {
    
    const navigate = useNavigate()
    const data = [
        {
            name: "Home",
            link: ""
        },
        {
            name: "Artist",
            link: "artist"
        },
        {
            name: "Onboarding",
            link: "onboarding"
        }
    ]
    return (
        <nav className="bg-white shadow-md px-4 md:px-8 py-4 flex items-center justify-between relative">
            <div className="hidden md:flex text-xl font-bold text-indigo-600">ArtistBooking</div>

            <div className='mx-auto md:mx-0 flex gap-4'>
                {data.map((data) => (
                    <button onClick={() => navigate(`/${data.link}`)} key={data.name} className='px-2 py-1 text-gray-700 font-semibold hover:text-indigo-600 transition cursor-pointer'>
                        {data.name}
                    </button>
                ))}
            </div>

        </nav>

    )
}

export default Header

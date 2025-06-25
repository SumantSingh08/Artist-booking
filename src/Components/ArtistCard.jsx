import React from 'react'

function ArtistCard({name, category, location, price}) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500 text-sm">{category} • {location}</p>
                <p className="text-blue-600 font-semibold mt-2">{price}</p>
                <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer">
                    Ask for Quote
                </button>
            </div>
        </div>
    )
}

export default ArtistCard

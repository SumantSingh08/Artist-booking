import React from 'react'

function Card({ name, category, location, image }) {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-500 text-sm">{category} • {location}</p>
            </div>
        </div>
    )
}

export default Card

import React from 'react'
import FilterBlock from '../Components/FilterBlock'
import { useSelector, useDispatch } from "react-redux";
import ArtistCard from '../Components/ArtistCard'
 function Artist() {
    const {artists, filterData} = useSelector((state) =>state.artist)
    const newAartists = artists.filter((artist) =>{
        const newCategory = filterData.category? artist.category === filterData.category : true  
        const newLocation = filterData.location? artist.location.toLowerCase().includes(filterData.location.toLowerCase()) : true 
        const newPrice = filterData.price? artist.price === filterData.price : true

        return newCategory && newLocation && newPrice;
 })
    console.log(newAartists);
    
    return (
        <div className="w-full bg-blue-100 min-h-screen">
        <div className="p-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Browse Artists</h2>
            <FilterBlock />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {newAartists.map((artist, index) => (
                    <ArtistCard key={index} name={artist.name} category={artist.category} location={artist.location} price={artist.price} />
                ))}
            </div>
            {newAartists.length === 0 && (
                <p className="text-center text-gray-600 mt-10">No artists match your criteria.</p>
            )}
        </div>
        </div>
    )
}

export default Artist;

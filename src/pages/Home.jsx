import React from 'react'
import Card from '../Components/Card';
import dj from '../assets/dj.jpg'
import singer from '../assets/singer.jpg'
import dancecrew from '../assets/dancecrew.jpg'
import speaker from '../assets/speaker.jpg'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const artists = [
        {
            name: "DJ Blaze",
            category: "DJ",
            location: "Delhi",
            image: dj
        },
        {
            name: "Simi Singh",
            category: "Singer",
            location: "Mumbai",
            image: singer
        },
        {
            name: "Ritu Dance Crew",
            category: "Dancer",
            location: "Bangalore",
            image: dancecrew
        },
        {
            name: "Motivator Max",
            category: "Speaker",
            location: "Chennai",
            image: speaker
        }
    ];
    return (
        <div className='w-full min-h-screen bg-blue-100'>
            
            
            <div className="bg-blue-100 text-center py-20 px-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Discover & Book Top Artists</h2>
                <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                    Whether you're planning a wedding, corporate event, or a private party, our platform connects
                    you with verified singers, DJs, dancers, and speakers across the country.
                </p>
                <button
                onClick={() => navigate('/artist')}
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 cursor-pointer"
                >
                    Explore Artists
                </button>
            </div>
            
            <div className="py-16 px-6 bg-blue-100">
                <h3 className="text-2xl font-bold text-center mb-6">Featured Artists</h3>
                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {artists.map((artist, idx) => (
                        <Card key={idx} {...artist} />
                    ))}
                </div>
            </div>
            
            <section className="py-16 px-6 bg-white">
                <h3 className="text-2xl font-bold text-center mb-6">Why Choose Our Platform?</h3>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-4 shadow rounded-lg border bg-gray-200">
                        <h4 className="font-semibold text-lg">Verified Talent</h4>
                        <p className="text-gray-600 mt-2">We list only pre-screened and professional artists.</p>
                    </div>
                    <div className="p-4 shadow rounded-lg border bg-gray-200">
                        <h4 className="font-semibold text-lg">Flexible Pricing</h4>
                        <p className="text-gray-600 mt-2">Choose artists that fit your budget and event scale.</p>
                    </div>
                    <div className="p-4 shadow rounded-lg border bg-gray-200">
                        <h4 className="font-semibold text-lg">Easy Booking</h4>
                        <p className="text-gray-600 mt-2">Book artists online with just a few clicks.</p>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Home

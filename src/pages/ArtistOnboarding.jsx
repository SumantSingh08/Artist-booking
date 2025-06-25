import React from 'react'
import { useForm } from "react-hook-form";
function ArtistOnboarding() {
    const {
        register,
        handleSubmit,
        
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        
        console.log(" Submitted Artist Data:", {
            ...data,

        });
        alert("Form submitted successfully!");
    };

    return (
        <div className='w-full min-h-screen bg-blue-100 py-6 px-2'>
            <div className="max-w-2xl  mx-auto p-6 bg-white rounded shadow">
                <h2 className="text-lg md:text-2xl items-center text-center font-bold mb-4">Artist Onboarding Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <div>
                        <label className="font-semibold">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full border p-2 rounded"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>


                    <div>
                        <label className="font-semibold">Bio</label>
                        <textarea
                            {...register("bio", {
                                required: "Bio is required",
                                minLength: { value: 10, message: "Minimum 10 characters required" }
                            })}
                            className="w-full border p-2 rounded"
                        />
                        {errors.bio && <p className="text-red-500">{errors.bio.message}</p>}
                    </div>


                    <div>
                        <label className="font-semibold">Category</label>
                        <div className="flex gap-4 flex-wrap">
                            {["DJ", "Singer", "Dancer", "Speaker"].map((cat) => (
                                <label key={cat} className="flex items-center gap-1">
                                    <input className='cursor-pointer' type="checkbox" value={cat} {...register("category")} />
                                    {cat}
                                </label>
                            ))}
                        </div>
                        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                    </div>


                    <div>
                        <label className="font-semibold">Languages Spoken</label>
                        <div className="flex gap-4 flex-wrap">
                            {["Hindi", "English", "Punjabi", "Tamil"].map((lang) => (
                                <label key={lang} className="flex items-center gap-1">
                                    <input className='cursor-pointer' type="checkbox" value={lang} {...register("languages")} />
                                    {lang}
                                </label>
                            ))}
                        </div>
                        {errors.languages && <p className="text-red-500">{errors.languages.message}</p>}
                    </div>


                    <div>
                        <label className="font-semibold">Fee Range</label>
                        <select
                            {...register("fee", { required: "Fee range is required" })}
                            className="w-full border p-2 rounded cursor-pointer"
                        >
                            <option value="">Select Fee Range</option>
                            <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                            <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                            <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
                            <option value="₹25,000 - ₹35,000">₹25,000 - ₹35,000</option>
                        </select>
                        {errors.fee && <p className="text-red-500">{errors.fee.message}</p>}
                    </div>


                    <div>
                        <label className='font-semibold'>Location</label>
                        <input
                            type="text"
                            {...register("location", { required: "Location is required" })}
                            className="w-full border p-2 rounded "
                        />
                        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                    </div>



                    <button
                        type="submit"
                        className="bg-blue-600 text-white text-center items-center px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ArtistOnboarding

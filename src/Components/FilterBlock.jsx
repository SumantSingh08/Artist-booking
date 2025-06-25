import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setCategory, setLocation, setPrice} from '../ReduxToolkit/artistSlice'

function FilterBlock () {
  const dispatch = useDispatch();
  const { filterData } = useSelector((state) => state.artist);

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <select
        value={filterData.category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="border p-2 rounded bg-white font-semibold"
      >
        <option value="">All Categories</option>
        <option value="DJ">DJ</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        value={filterData.location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
        className="border p-2 rounded bg-white font-semibold"
      />
      <select
        value={filterData.price}
        onChange={(e) => dispatch(setPrice(e.target.value))}
        className="border p-2 rounded bg-white font-semibold"
      >
        <option value="">All Prices</option>
        <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
        <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
        <option value="₹20,000 - ₹30,000">₹20,000 - ₹30,000</option>
        <option value="₹25,000 - ₹35,000">₹25,000 - ₹35,000</option>
      </select>
    </div>
  );
};

export default FilterBlock;


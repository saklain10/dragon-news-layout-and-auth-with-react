import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";


const NewsDetailsCard = ({ news }) => {
    // console.log(news)
    return (
        <div className='space-y-5 p-4 border rounded border-gray-300'>
            <img className=' object-cover rounded' src={news.image_url} alt="" />
            <h2 className='text-2xl font-bold'>{news.title}</h2>
            <p className='text-justify'>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}><FaArrowLeft />
                All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;
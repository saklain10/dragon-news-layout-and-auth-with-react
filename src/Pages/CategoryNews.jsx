import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams() //use params e string ashe
    const data = useLoaderData()
    // console.log(id, data)
    const [categoryNews, setCategoryNews] = useState([]) //use state hook array return kore //category news e data thake r set function diye data niye set kora hoy //categoryNews er value hbe empty for []

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data)
            return
        }
        else if (id == "1") {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filterNews)
        }

        else {
            const filterNews = data.filter((news) => news.category_id == id);
            //normal json id num e thake so need to use == for no need to check data type
            setCategoryNews(filterNews)
        }
    }, [data, id])
    return (
        <div>
            <div className='flex justify-between mb-4'>
                <h2 className='font-bold'>Dragon News Home</h2>
                {/* <h2 className='font-bold text-accent' >Total <span className='text-secondary'>{categoryNews.length}</span> news found in this category</h2> */}
            </div>
            <div className='grid grid-cols-1'>
                {
                    categoryNews.map((news) => (<NewsCard news={news} key={news.id}></NewsCard>)
                    )}
            </div>
        </div>

    );
};

export default CategoryNews;
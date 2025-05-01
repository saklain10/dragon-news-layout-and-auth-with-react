import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams() //use params e string ashe
    const data = useLoaderData() 
    // console.log(id, data)
    const [categoryNews, setCategoryNews] = useState([]) //use state hook array return kore //category news e data thake r set function diye data niye set kora hoy //categoryNews er value hbe empty for []
    
    useEffect(() => {
        if(id =="0"){
            setCategoryNews(data)
            return
        }
        else if (id == "1") {
            const filterNews = data.filter((news) =>news.others.is_today_pick == true);
            setCategoryNews(filterNews)
        }
            
        else{
            const filterNews = data.filter((news) =>news.category_id == id);
         //normal json id num e thake so need to use == for no need to check data type
         setCategoryNews(filterNews)
        }
    },[data, id])
    return (
        <div>
            Total {categoryNews.length} news found
        </div>
    );
};

export default CategoryNews;
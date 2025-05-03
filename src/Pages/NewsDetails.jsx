import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const{id} = useParams();
    const [news, setNews] = useState({});
    // console.log(id,data,news,)
    useEffect(() => {
        const NewsDetails = data.find((singleNews) => singleNews.id == id);

        setNews(NewsDetails)
    },[data,id])

    return (
        <div className='mb-4'>
           <header className='py-2'>
           <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-3'>
           <section className='col-span-9'>
            <h2 className='font-bold mb-4' >News Details</h2>
            <NewsDetailsCard news={news}></NewsDetailsCard>
           </section>
           <aside className='col-span-3 sticky top-3 h-fit max-h-screen overflow-y-auto'>
            <RightAside></RightAside>
           </aside>
           </main>
        </div>
    );
};

export default NewsDetails;
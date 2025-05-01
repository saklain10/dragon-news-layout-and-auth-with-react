import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3 rounded'>
            <p className='text-base-100 bg-secondary px-3 py-2 btn'>Latest</p>
            <Marquee className='flex gap-10' pauseOnHover={true} speed={60}>
            <p className='font-semibold text-accent'>Pakistan claims it has ‘credible intelligence’ India will strike within 36 hours</p>
            <p className='font-semibold text-accent'>Inter Milan, Barcelona Endure Thrilling Heavyweight Battle: Takeaways From Champions League Semifinals</p>
            <p className='font-semibold text-accent'>Do these 6 things to set boundaries, protect your energy and earn respect, says executive coach</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
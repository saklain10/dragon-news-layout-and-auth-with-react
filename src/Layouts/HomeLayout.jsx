import React from 'react';
import Header from '../Components/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div className='pb-5'>
            <header>
                <Header></Header>
                {
                    import.meta.env.VITE_name
                }
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-5 gap-5 grid lg:grid-cols-12 grid-cols-1'>
                <aside className='col-span-3 lg:sticky top-2 h-fit max-h-screen lg:overflow-y-auto'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav col-span-6'>
                   {state == 'loading'? <Loading/> : <Outlet></Outlet>} 
                </section>
                <aside className='col-span-3 lg:sticky top-2 h-fit max-h-screen lg:overflow-y-auto'>
                <RightAside></RightAside></aside>            </main>
        </div>
    );
};

export default HomeLayout;
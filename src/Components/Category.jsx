import React, { use } from 'react';
import { NavLink } from 'react-router';
const CategoriesPromise = fetch("/categories.json")
.then((res) => res.json())

const Category = () => {
    // console.log(CategoriesPromise)
    const categories = use(CategoriesPromise)

    return (
        <div>
            <h2 className='font-bold'>All Categories ({categories.length})</h2>

            <div className='grid grid-cols-1 mt-5 gap-1'>
                {
                    categories.map((category) => 
                    <NavLink className={"font-semibold text-accent btn bg-base-100 shadow-none border-0 hover:bg-base-300 justify-start"} key={category.id} to={`/category/${category.id}`}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
        
    );
};

export default Category;
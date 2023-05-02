/* eslint-disable react/jsx-indent */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

function Blogs() {
    const { blogsData } = useLoaderData();

    return (
        <div className="my-container">
            <h1 className="hover-stroke text-5xl font-bold" data-text="Blogs">
                Blogs
            </h1>

            <div className="grid grid-cols-2 gap-8 mt-5">{blogsData && blogsData.map((blog) => <BlogCard key={blog.id} data={blog} />)}</div>
        </div>
    );
}

export default Blogs;

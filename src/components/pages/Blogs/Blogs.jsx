/* eslint-disable comma-dangle */
/* eslint-disable new-cap */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-indent */
// /* eslint-disable react/jsx-indent */

import { jsPDF } from 'jspdf';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

function Blogs() {
    const { blogsData } = useLoaderData();

    const downloadPDF = () => {
        const doc = new jsPDF();
        const elementHandlers = {
            // eslint-disable-next-line no-unused-vars
            '#ignorePDF': function (element, renderer) {
                return true;
            }
        };
        const styles = `
          <style>
            h2 {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            p {
              font-size: 14px;
              line-height: 1.5;
              margin-bottom: 20px;
            }
          </style>
        `;
        const blogs = blogsData.map(
            (blog) => `
          <div style={{fontSize: "14px"}}>
            <h2>${blog.author}</h2>
            <h2>${blog.question}</h2>
            <p>${blog.answer}</p>
          </div>
        `
        );
        const content = styles + blogs.join('');

        doc.html(content, {
            callback() {
                doc.save('blogs.pdf');
            },
            x: 15,
            y: 15,
            width: 390,
            elementHandlers
        });
    };
    return (
        <div className="my-container">
            <div className="flex justify-between items-center">
                <h1 className="hover-stroke text-3xl md:text-5xl font-bold" data-text="Blogs">
                    Blogs
                </h1>
                <button className="btn btn-sm md:btn-wide btn-primary" type="button" onClick={downloadPDF}>
                    Download as PDF
                </button>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-5">{blogsData && blogsData.map((blog) => <BlogCard key={blog.id} data={blog} />)}</div>
        </div>
    );
}

export default Blogs;

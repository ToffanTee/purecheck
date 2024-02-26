import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mx-auto py-8 mt-20">
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Blog Post 1"
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Blog Post 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Read more
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Blog Post 2"
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Blog Post 2</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Read more
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://via.placeholder.com/300"
              alt="Blog Post 3"
              className="rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Blog Post 3</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <a href="#" className="text-blue-500 hover:text-blue-700">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

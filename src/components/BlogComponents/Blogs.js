import { React, useEffect } from "react";
import { useGetAllBlogsMutation } from "../../lib/APIs/blogAPI";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [getAllBlogs, { data, isLoading, isError, error }] =
    useGetAllBlogsMutation();

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="container mx-auto py-8 mt-20">
      <h1 className="text-3xl text-center font-bold mb-8">Latest Blog Posts</h1>
      {isLoading ? (
        <div className="text-3xl text-center font-bold">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {isError && (
            <div className="alert alert-danger" role="alert">
              {error?.error || "Something went wrong"}
            </div>
          )}
          {data?.map((blog) => {
            return <BlogCard key={blog._id} {...blog} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Blogs;

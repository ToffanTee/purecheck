import { useState, useEffect } from "react";
import Blogs from "../components/BlogComponents/Blogs";

const BlogPage = () => {
  const [isLoading, setIsLoading] = useState(true); // Initial loading state
  const [blogs, setBlogs] = useState([]); // Array to store fetched blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true); // Set loading to true before fetching

      try {
        const response = await fetch("/api/blogs"); // Replace with your API endpoint
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (or on error)
      }
    };

    fetchBlogs();
  }, []); // Run effect only once on component mount

  return (
    <div>
      {isLoading ? (
        // Display loading indicator here (e.g., spinner, skeleton screen)
        <div className="loading">Loading...</div>
      ) : (
        <Blogs blogs={blogs} />
      )}
    </div>
  );
};

export default BlogPage;

// import Blogs from "../components/BlogComponents/Blogs";

// const BlogPage = () => {
//   return <Blogs />;
// };

// export default BlogPage;

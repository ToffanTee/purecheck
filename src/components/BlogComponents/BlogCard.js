import { Link } from "react-router-dom";

const BlogCard = ({ title, content }) => {
  return (
    <div className="col-span-1">
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Blog Post 1"
          className="rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{content.substring(1, 100)}</p>
        <Link to="#" className="text-blue-500 hover:text-blue-700">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

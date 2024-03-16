import { Link } from "react-router-dom";
import BlogImage from "../../assets/Blog/happy-client-with-their-box-delivered.jpg";

const BlogCard = ({ title, content }) => {
  return (
    <div className="col-span-1">
      <div className="blog_card">
        <img src={BlogImage} alt="Blog Post 1" className="rounded-md mb-4" />
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        {/* <p className="text-gray-700">{content.substring(1, 100)}</p> */}
        <Link
          to={`/blogs/${title}`}
          className="text-blue-500 hover:text-blue-700"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

import axios from "axios";
import { useEffect, useState } from "react";

const BlogCard = ({ title, summery, blogid }) => {
  return (
    <div className="my-5 mx-10">
      <a
        href={`http://portfolio-atharvparlikar.vercel.app/blog/${blogid}`}
        className="block max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {summery}
        </p>
      </a>
    </div>
  );
};

const BlogsPage = () => {
  const [blogs, setBlogs] = useState(undefined);
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://24.199.124.186:4000/api/v1/getBlogs");
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    })();
  }, []);

  return (
    <div className="App w-screen h-screen flex justify-center">
      <div className="container w-fit border-2 mt-28 rounded-lg border-gray-400 h-fit flex flex-col">
        {/* close buttons */}
        <div className="h-7 w-full border-2 border-b-gray-400 rounded-t-lg flex flex-col justify-center">
          {/* close buttons */}
          <div className="flex ml-3">
            <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <nav className="w-11/12 flex justify-center mt-10 mx-auto">
          <ul className="flex justify-around my-auto font-UbuntuMono text-lg">
            <li
              onClick={() => {
                window.location.href = "http://portfolio-atharvparlikar.vercel.app/";
              }}
              className="mx-5 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                window.location.href = "http://portfolio-atharvparlikar.vercel.app/projects";
              }}
              className="mx-5 cursor-pointer"
            >
              Projects
            </li>
            <li
              onClick={() => {
                window.location.href = "http://portfolio-atharvparlikar.vercel.app/blogs";
              }}
              className="mx-5 cursor-pointer"
            >
              Blog
            </li>
          </ul>
        </nav>
        <div className="my-10 flex flex-col w-full justify-around h-full mx-auto">
          {blogs === undefined ? (
            <p>loading...</p>
          ) : (
            blogs.map((blog) => {
              return (
                <BlogCard
                  title={blog.title}
                  summery={blog.summery}
                  blogid={blog.blogId}
                  key={blog.id}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default BlogsPage;

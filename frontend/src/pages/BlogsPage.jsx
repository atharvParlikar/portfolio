import axios from "axios";
import { useEffect, useState } from "react";

const BlogCard = ({ title, summery, blogid }) => {
  return (
    <div className="my-5 mx-10">
      <a
        href={`http://localhost:5173/blog/${blogid}`}
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
      const response = await axios.get("http://localhost:4000/api/v1/getBlogs");
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    })();
  }, []);

  return (
    <div className="App w-screen h-screen flex justify-center">
      <div className="container w-fit border-2 mt-28 rounded-lg border-gray-400 h-fit flex">
        <div className="my-10 flex flex-col w-full justify-around h-full">
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

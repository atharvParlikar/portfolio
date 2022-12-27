import Markdown from 'marked-react';
import { createElement, useEffect, useState } from "react";
import axios from 'axios';
import '../../node_modules/github-markdown-css/github-markdown.css';

const Blog = ({ encoded_blog }) => {
  const [blog, setBlog] = useState("");
  const [html, setHtml] = useState("");

  // runs only when the page renders initially
  useEffect(() => {
    (async () => {
      const blog_ = await axios.get("http://localhost:4000/api/v1/blog/3");
      setBlog(blog_.data.body);
    })();
  }, []);

  // runs whenever the variable "blog" changes (which only happens once)
  useEffect(() => {
    (async () => {
      const html = await axios({
        method: "post", url: "https://api.github.com/markdown", data: {
          mode: "markdown",
          text: blog
        }
      });
      setHtml(html.data);
    })();
  }, [blog]);

  return (
    <div className='w-screen flex justify-center mt-16'>
      <div className='border-2 border-gray-300 p-6 rounded-md md:w-8/12 lg:w-6/12'>
        <div className='markdown-body ' dangerouslySetInnerHTML={{
          __html: html
        }}>
        </div>
      </div>
    </div>
  )
};

export default Blog;


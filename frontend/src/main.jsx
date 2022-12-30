import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Blog from './components/Blog'
import BlogsPage from './pages/BlogsPage'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/blogs",
    element: <BlogsPage />
  },
  {
    path: "/blog/:blog_no",
    element: <Blog />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>
);

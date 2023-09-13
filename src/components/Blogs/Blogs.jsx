import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
 
const Blogs = ({handleAddToBookmark, handleReadTime}) => {
    const [blogs , setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 ">
            {
                blogs.map(blog => <Blog
                key={blog.id}
                handleAddToBookmark = {handleAddToBookmark}
                handleReadTime = {handleReadTime}
                blog = {blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmark : PropTypes.func.isRequired,
    handleReadTime : PropTypes.func.isRequired,
};

export default Blogs;
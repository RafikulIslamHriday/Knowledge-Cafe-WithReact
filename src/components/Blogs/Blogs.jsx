import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
 
const Blogs = ({handleAddToBookmark}) => {
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
                blog = {blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;
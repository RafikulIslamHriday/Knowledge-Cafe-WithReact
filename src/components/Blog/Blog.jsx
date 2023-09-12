 import PropTypes from "prop-types"
 import {FaBookmark} from 'react-icons/fa';
 const Blog = ({blog,handleAddToBookmark}) => {
    const {id,title,cover,author, author_img, reading_time, posted_date,hashtags
    } = blog
    // console.log(handleAddToBookmark);
    return (
        <div className="mb-10 px-4">
            <img src={cover} alt={`this is the cover photo of ${id}`} className="w-full" />

            <div className="flex justify-between my-3">
                <div className="flex gap-3 items-center">
                    <img src= {author_img} alt="" className="w-[50px] rounded-full" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <samp>{reading_time} min read</samp>
                     <button onClick={() =>  handleAddToBookmark(blog)} className="ml-2 text-xl"><FaBookmark></FaBookmark></button>


                </div>
            </div> 
            <p>
                {
                    hashtags.map((hash, idx) =><samp key={idx}> <a href="">#{hash}</a></samp> )
                }
            </p>

            <h2 className="text-3xl">{title}</h2>
           
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}
export default Blog;
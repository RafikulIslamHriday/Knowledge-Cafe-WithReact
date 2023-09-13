import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

//  import PropTypes from "prop-types"
const Bookmarkes = ({bookmarks, time}) => {
 
    return (
        <div className="w-1/3">
            <div className="px-5 py-3 mb-4 border-2 border-purple-400 rounded-lg">
                <h3 className="text-xl ">Reading Time :{time} </h3>
            </div>
           <div className="py-4 px-3 border-2 border-sky-500 rounded-lg" >
           <h2 className="text-xl">Bookmark length : {bookmarks.length}</h2>
           {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark ={bookmark}></Bookmark>)
            }
           </div>
            
        </div>
    );
};
Bookmarkes.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    time : PropTypes.number.isRequired
};


export default Bookmarkes;
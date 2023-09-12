import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

//  import PropTypes from "prop-types"
const Bookmarkes = ({bookmarks}) => {

    return (
        <div className="w-1/3">
            <h2 className="text-2xl">Bookmark length : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark ={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
Bookmarkes.propTypes = {
    bookmarks : PropTypes.array.isRequired
};


export default Bookmarkes;
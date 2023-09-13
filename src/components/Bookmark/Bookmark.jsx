
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    // console.log(bookmark);
    return (
        <div className='px-5 py-3 border-2 border-gray-600 rounded-lg my-3'>
            <h2 className='text-xl'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
};



export default Bookmark;

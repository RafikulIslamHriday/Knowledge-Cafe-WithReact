
import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  
  const handleAddToBookmark = (blog) =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
   }
 
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-5">
         <Blogs handleAddToBookmark= {handleAddToBookmark}></Blogs>
         <Bookmarkes bookmarks = {bookmarks}></Bookmarkes>
      </div>
    </>
  )
}

export default App

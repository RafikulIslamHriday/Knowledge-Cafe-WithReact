import Swal from 'sweetalert2'
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarkes from './components/Bookmarkes/Bookmarkes'
import Header from './components/Header/Header'

function App() {
   
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0)
  
  const handleAddToBookmark = (blog) =>{
    const isAxist = bookmarks.find(item =>item.id === blog.id)
    if(isAxist){
      // alert("This One is already axist in bookmark")
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }else{
      const newBookmark = [...bookmarks, blog]
      setBookmarks(newBookmark)
    }
   
   }

   const handleReadTime = tim => {
   const newTime = time + tim;
    setTime(newTime)

   } 
 
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-5">
         <Blogs handleAddToBookmark= {handleAddToBookmark} handleReadTime = {handleReadTime}></Blogs>
         <Bookmarkes bookmarks = {bookmarks} time = {time}></Bookmarkes>
      </div>
    </>
  )
}

export default App

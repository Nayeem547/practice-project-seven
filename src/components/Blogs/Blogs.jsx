import {useEffect} from 'react'
import {useState } from 'react'
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToCredit}) => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
      } , [])
  
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
         
         {
            Blogs.map(blog => <Blog key={blog.id} blog={blog}  handleAddToCredit={handleAddToCredit}>
               </Blog>) 
         }
      </div>
    );
  };
  
  export default Blogs;
import {useEffect} from 'react'
import {useState } from 'react'
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
      } , [])
  
    return (
      <div className='grid grid-cols-3'>
         
         {
            Blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>) 
         }
      </div>
    );
  };
  
  export default Blogs;
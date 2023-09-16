import PropTypes from 'prop-types'; 
import vector from '../../assets/img/dollar-sign 1.png'
import frame from '../../assets/img/Frame.png'
import { prototype } from 'postcss/lib/node';


const Blog = ({blog, handleAddToCredit}) => {
   const {course_name, image, details, credit, price} = blog;
  
    return (

      
  <div className=' '>

<div className="card   card-compact h-[370px] w-80 bg-base-100 shadow-xl">
  <figure><img  src={image} alt={`cover picture of the course_name${course_name}`}></img></figure>
  <div className="card-body">
    <h2 className="text-xl font-semibold ">{course_name}</h2>
    <p>{details}</p>
    <div className='flex space-x-4 mt-2'>
      <img src={vector} alt=""  />
      <p className='text-[#1C1B1B99] text-lg font-medium'>Price: {price}</p>
      <img src={frame} alt="" />
      <p className='text-[#1C1B1B99] text-lg font-medium'>Credit: {credit}hr</p>
    </div>
    <div className="card-actions justify-center mt-3 py-[-22px] ">
      <button onClick = {() => handleAddToCredit(blog)} className="btn btn-primary px-28  py-2 text-white font-medium ">Select</button>
    </div>
  </div>
</div>
</div>
    );
  };
  
  Blog.propTypes = {
    blog: PropTypes.object.isRequired
    
  }
  export default Blog;
import PropTypes from 'prop-types'; 
import vector from '../../assets/img/Vector.png'
import frame from '../../assets/img/Frame.png'


const Blog = ({blog}) => {
   const {course_name, image, details, credit, price} = blog;
  
    return (

      
  <div className=''>
<div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img src={image} alt={`cover picture of the course_name${course_name}`}></img></figure>
  <div className="card-body">
    <h2 className="text-2xl font-semibold">{course_name}</h2>
    <p>{details}</p>
    <div className='flex space-x-4'>
      <img src={vector} alt=""  />
      <p className='text-[#1C1B1B99] text-lg font-medium'>Price: {price}</p>
      <img src={frame} alt="" />
      <p className='text-[#1C1B1B99] text-lg font-medium'>Credit: {credit}hr</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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
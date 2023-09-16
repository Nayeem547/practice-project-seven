
import PropTypes from 'prop-types'




const Credter = ({credter}) => {
    const {course_name} = credter;
    
   
  
    return (
      
        <div className="flex flex-col justify-center mt-7 ">
           
            <li>{course_name}</li>
           
        </div>
      
    );
  };
  Credter.propTypes = {
    credter: PropTypes.object
  }
  export default Credter;
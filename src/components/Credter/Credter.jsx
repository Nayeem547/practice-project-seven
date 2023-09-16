
import PropTypes from 'prop-types'




const Credter = ({credter}) => {
    const {credits, course_name,remaining, totalPrice} = credter;
    
   
  
    return (
      
        <div  > 
         
          
{/*           
           {
            credits.map((credter) => (
              <li key={credter.id} >{course_name}</li>
            ) )}  */}
          <ul className='list-decimal '>

          
          <li key={credter.id} >{course_name}</li>
          </ul>
         </div>
        
      
    );
  };
  Credter.propTypes = {
    credter: PropTypes.object
  }
  export default Credter;
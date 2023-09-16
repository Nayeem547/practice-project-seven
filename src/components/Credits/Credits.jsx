
import PropTypes  from 'prop-types'
import Credter from '../Credter/credter';

const Credits = ({credits}) => {
  
    
    return (
      
        <div className=" mt-7">
            <h2 className="text-4xl font-bold">Course Registration</h2>
             {
                credits.map(credter => <Credter key={credter.id} credter={credter} ></Credter>  )
            } 
        </div>
      
    );
  };

  Credits.propTypes = {
    credits: PropTypes.array
  }
  export default Credits;
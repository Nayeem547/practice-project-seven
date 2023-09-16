
import PropTypes  from 'prop-types'
import Credter from '../Credter/credter';

const Credits = ({credits,remaining, totalPrice, totalCredit}) => {
    // const { remaining, totalPrice} = credits;
  
  
    
    return (
      
        <div className="card w-80 lg:w-96 bg-base-100 shadow-xl h-[450px] mt-7">
            <div class="card-body">
             <h2 className=" text-xl  lg:text-2xl text-[#2F80ED] font-bold">Credit Hour Remaining {remaining}hr</h2> 

             <h2 className='text-3xl font-medium border-t  '>Course Name</h2>

               
           
           
             {
                credits.map(credter => <Credter key={credter.id} credter={credter} ></Credter>  )
            }  

             <div>
            <h2  > </h2>
          </div>
          <div className='border-t pb-2 pt-2 '>
            <h2 className='text-xl font-medium '>Total Credit Hour :{totalCredit} </h2>
          </div>
          <div className=' border-t pb-3 pt-2 '>
            <h2 className='text-xl font-medium  ' >Total Price :{totalPrice} USD </h2>
          </div>
        
        </div>
        </div>
    );
  };

  Credits.propTypes = {
    credits: PropTypes.array
  }
  export default Credits;
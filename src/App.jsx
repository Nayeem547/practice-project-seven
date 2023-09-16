import { useState } from 'react'


import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header';
import Credits from './components/Credits/Credits';


function App() {
  const [credits, setcredits] = useState([]);
  
  const handleAddToCredit = blog =>{
   const newCredits = [...credits, blog];
   setcredits(newCredits);
  };

  return (
    <>
    
      <Header></Header>
     <div className='flex justify-center gap-10 mt-10'>
     <Blogs handleAddToCredit={handleAddToCredit}></Blogs>

      <Credits credits={credits} ></Credits>
     </div>
      
     
    </>
  )
}

export default App;

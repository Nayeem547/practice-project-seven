import { useState } from 'react'


import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header';
import Credits from './components/Credits/Credits';
import Credter from './components/Credter/credter';
import '@sweetalert2/themes/dark/dark.scss';


function App() {
  const [credits, setcredits] = useState([]);
  const [remaining, setremaining] = useState(20);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalCredit, settotalCredit] = useState(0)
  
  const handleAddToCredit = (blog) =>{
   
    const isExist = credits.find((item) => item.id == blog.id);
    console.log(isExist);
    let Amount = blog.price;
    let count = blog.credit;
    if (isExist) {
     return alert("alrady booked");
    } else {
      credits.forEach((item) =>{
        count += item.credit;
        Amount += item.price;
      });
      const totalRemaining = 20 - count;

      if(count > 20){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No Credits Here',
          footer: '<a href="">Why do I have this issue?</a>'
        });
      } else{
        settotalCredit(count)
        settotalPrice(Amount);
        setremaining(totalRemaining);
        setcredits([...credits, blog]);
      }
      
    } 

    
  //  const newCredits = [...credits, blog];
  // setcredits(newCredits);
  };

  return (
    <>
    
      <Header></Header>
     <div className='flex justify-center gap-10 mt-10'>
     <Blogs handleAddToCredit={handleAddToCredit}></Blogs>

      <Credits Credter={Credter} credits={credits} remaining={remaining} totalPrice={totalPrice} totalCredit={totalCredit} ></Credits>
     </div>
      
     
    </>
  )
}

export default App;

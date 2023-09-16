import { useEffect, useState } from 'react'


import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header';

function App() {
  const [count, setcount] = useState([]);

  

  return (
    <>
      <Header></Header>
     
      <Blogs></Blogs>
     
    </>
  )
}

export default App;

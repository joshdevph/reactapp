// import React, {useState, useEffect} from 'react'
// import Navbar from "./components/Navbar";
// import Dropdown from "./components/Dropdown";
import Hero from './components/Hero';

function App() {
  // const [isOpen, setIsOpen] = useState(false)
  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }
  // useEffect(() => {
  //   const hide = () =>{
  //     if(window.innerWidth > 768 && isOpen){
  //       setIsOpen(false)
  //     }
  //   }

  //   window.addEventListener('resize', hide)

  //   return() => {
  //     window.removeEventListener('resize', hide)
  //   }
  // })
  return (
    <>
    {/* <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/> */}
    <Hero/>
    
    </>
  );
}

export default App;

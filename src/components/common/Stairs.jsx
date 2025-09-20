import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {

  const currPath  = useLocation().pathname


  const stairParentRef = useRef(null);
  const pageRef = useRef(null);
  
 
  useGSAP(function() {
     const tl = gsap.timeline()

    tl.to(stairParentRef.current,{
        display:'block',
      })
    tl.from(".stair", {
      height: 0,
      stagger: {
                amount: -0.26,
      },
     
    })
     tl.to(".stair",{
        y:'100%',
         stagger: {
        amount: -0.26,
      },
      });
      tl.to(stairParentRef.current,{
        display:'none',
      });
       tl.to(".stair",{
        y:'0%',
       
      });

      gsap.from(pageRef.current,{
        opacity:0,
        delay:1.3,
        scale:1.2,
      })
      
  },[currPath]);   

  return (
    <div>
      <div ref={stairParentRef} className="h-screen fixed w-full top-0  z-20">
       <div className="h-full fixed w-full flex">
        <div className="stair h-full w-1/5 bg-black"> </div>
        <div className="stair h-full w-1/5 bg-black"> </div>
        <div className="stair h-full w-1/5 bg-black"> </div>
        <div className="stair h-full w-1/5 bg-black"> </div>
        <div className="stair h-full w-1/5 bg-black"> </div>
      </div>
     </div>
     <div ref={pageRef}>
        {props.children}
     </div>
    </div>
  )
}

export default Stairs

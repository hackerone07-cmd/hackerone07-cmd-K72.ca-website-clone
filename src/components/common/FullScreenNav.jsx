import React, { useContext, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NavbarContext } from "../../context/navContext";
const FullScreenNav = () => {
  const fullscreenlinknav = useRef(null)
  const fullScreenRef = useRef(null)
  const [navOpen,setnavOpen] = useContext(NavbarContext);
  console.log(navOpen);

function gsapAnimation(){
 const tl = gsap.timeline();
 tl.to('.fullScreenNav',{
  display: "block"
 })
    tl.to(".stairing", {
      delay:0.3,
      height: '100%',
      stagger: {
        amount: -0.3,
      },
    });
  
    tl.to(".link",{
      opacity:1, 
      rotateX: 0, 
      stagger: {
        amount: 0.3,
      },
    });
    tl.to('.navLink',{
    opacity:1
    })
  
}

function gsapAnimationReverse(){
 
  const tl = gsap.timeline();

  tl.to(".link", {
    opacity: 0,
    rotateX: 90,
    stagger: { amount: 0.1 },
  });

  tl.to(".stairing", {
    height: 0,
    stagger: { amount: 0.2 },
  });

  tl.to('.navLink', {
    opacity: 0
  });

  tl.to('.fullScreenNav', {
    display: 'none'
  },); // delay to allow previous animations to finish

  
}

  useGSAP(() => {
  if (navOpen) {
    gsapAnimation();
  } else {
    gsapAnimationReverse();
  }
}, [navOpen]);

  return (
    <div ref={fullScreenRef} className="fullScreenNav  h-screen text-white z-50  overflow-hidden w-full absolute" >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"> </div>
          <div className="stairing h-full w-1/5 bg-black"> </div>
          <div className="stairing h-full w-1/5 bg-black"> </div>
          <div className="stairing h-full w-1/5 bg-black"> </div>
          <div className="stairing h-full w-1/5 bg-black"> </div>
        </div>
      </div>
      <div ref={fullscreenlinknav} className="relative">
        <div className="navLink flex w-full justify-between p-2 items-start">
          <div className="">
            <div className=" w-30 ">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div onClick={()=>{
            setnavOpen(false)
          }} className="cursor-pointer relative lg:h-24 h-18 lg:w-24 w-18">
            <div className="lg:h-34 h-24 lg:w-1 w-1  -rotate-45 origin-top absolute bg-white "></div>
            <div className="lg:h-34 h-24 lg:w-1 w-1 right-0 rotate-45 origin-top absolute bg-white "></div>
            <div></div>
          </div>
        </div>
        <div className="lg:py-18 py-30">
          <div className="link origin-top  border-t-1  relative border-white">
            <h1 className="font-[font2] text-4xl lg:text-[7vw] text-center uppercase leading-16 lg:leading-[0.8] pt-1 lg:pt-3 "> Projects</h1>
            <div className="moveLink absolute top-0 bg-[#D3FD50] text-black flex">
              <div className=" moveX flex  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 ">Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
              </div>
              <div className=" moveX flex  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir </h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full" src="" alt="" />
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img  className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"src="" alt=""/>
              </div>
            </div>
         </div>
          <div className="link origin-top  border-t-1  relative border-white">
            <h1 className="font-[font2] text-4xl lg:text-[7vw] text-center uppercase leading-16 lg:leading-[0.8] pt-1 lg:pt-3 "> Projects</h1>
            <div className="moveLink absolute top-0 bg-[#D3FD50] text-black flex">
              <div className=" moveX flex  moveX  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 ">Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
              </div>
              <div className=" moveX flex  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir </h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full" src="" alt="" />
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img  className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"src="" alt=""/>
              </div>
            </div>
         </div>
          <div className="link origin-top  border-t-1  relative border-white">
            <h1 className="font-[font2] text-4xl lg:text-[7vw] text-center uppercase leading-16 lg:leading-[0.8] pt-1 lg:pt-3 "> Projects</h1>
            <div className="moveLink absolute top-0 bg-[#D3FD50] text-black flex">
              <div className=" moveX flex  moveX  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 ">Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
              </div>
              <div className=" moveX flex  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir </h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full" src="" alt="" />
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img  className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"src="" alt=""/>
              </div>
            </div>
         </div>
          <div className="link origin-top  border-y-1  relative border-white">
            <h1 className="font-[font2] text-4xl lg:text-[7vw] text-center uppercase leading-16 lg:leading-[0.8] pt-1 lg:pt-3 "> Projects</h1>
            <div className="moveLink absolute top-0 bg-[#D3FD50] text-black flex">
              <div className=" moveX flex  moveX  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 ">Pour Tout voir</h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"/>
              </div>
              <div className=" moveX flex  items-center">
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir </h2>
                <img className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full" src="" alt="" />
                <h2 className="whitespace-nowrap  font-[font2] lg:text-[7vw] text-4xl text-center uppercase lg:leading-[0.8] pt-1 lg:pt-3 "> Pour Tout voir</h2>
                <img  className="lg:h-20 h-16 shrink-0 lg:w-52 w-46 bg-red-600 rounded-full"src="" alt=""/>
              </div>
            </div>
         </div>
         
        
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;

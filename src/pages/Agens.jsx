import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const Agens = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const imageArray = [
    "/public/img1.jpg",
    "/public/img2.jpg",
    "/public/img3.jpg",
    "/public/img4.jpg",
    "/public/img5.jpg",
    "/public/img6.jpg",
    "/public/img4.jpg",
    "/public/img8.jpg",
    "/public/img9.jpg",
    "/public/img10.jpg",
    "/public/img11.jpg",
    "/public/img12.jpg",
    "/public/img13.jpg",
    "/public/img14.jpg",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
       
        start: "top 24%",
        end: "top -130%",
        pin: true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',

        anticipatePin: 1,
        scrub:1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIdx;
          if (elem.progress < 1) {
             imageIdx = Math.floor(elem.progress * imageArray.length);
          } else {
             imageIdx = imageArray.length-1;
          }
           imageRef.current.src = imageArray[imageIdx];
        },
      },
    });
  },imageDivRef);

  return (
    <div className="parent ">
      <div id="page1" className="py-1" >
         <div ref={imageDivRef} className="h-[20vw] rounded-3xl overflow-hidden  w-[15vw] absolute top-[25vh] left-[29vw]" >
          <img ref={imageRef} className="h-full w-full  "src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt=""/>
        </div>
        <div className="relative font-[font2]">
          <div className=" mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw] ">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="pl-[38%] ">
            <p className="text-6xl ">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
              curiosité nourrit notre créativité. On reste humbles <br /> et on
              dit non aux gros egos, même
              <br /> le vôtre. Une marque est vivante. Elle a des valeurs,
              unpersonnalité,
              <br /> une histoire. Si on oublie ça, on peut faire de bons
              chiffres à court terme, mais on la tue à long terme. C’est pour ça
              qu’on s’engage à donner de la perspective, pour bâtir des marques
              influentes.
            </p>
          </div>
        </div>
      </div>
      <div id="page2" className=" h-screen"></div>
    </div>
  );
};

export default Agens;

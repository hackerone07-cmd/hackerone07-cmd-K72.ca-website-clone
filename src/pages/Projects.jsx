import React, { useRef, useEffect } from "react";
import Project from "../components/projects/Project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";

const Projects = () => {
 

  const projects = [
    { image1: "/1.jpg", image2: "/2.jpg" },
    { image1: "/3.jpg", image2: "/4.jpg" },
    { image1: "/5.png", image2: "/6.jpg" },
    { image1: "/7.jpg", image2: "/8.jpg" },
    { image1: "/9.jpg", image2: "/10.jpg" },
  ];

  // Smooth scroll setup
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Scroll-triggered animation
  gsap.registerPlugin(ScrollTrigger);
useGSAP(() => {
  gsap.utils.toArray(".hero").forEach((el) => {
    gsap.from(el, {
      height: "100px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: el,
        start: "top 70%",
        end: "top -80%",
        scrub: true,
        markers: true,
      },
    });
  });
});



  return (
    <div className="lg:p-4 p-2 mb-[100vh]" >
      <div className="lg:pt-[42vh] pt-56">
        <h1 className="font-[font2] uppercase lg:text-[13vw] text-5xl">projects</h1>
      </div>
      <div className=" lg:mt-4 mt-10">
        {projects.map((elem, idx) => {
          return <div key={idx} className="hero w-full lg:h-[550px] mb-4 flex gap-1 lg:gap-2">
            <Project image1={elem.image1} image2={elem.image2} />
          </div>
        }
      )}
      </div>
    </div>
  );
};

export default Projects;
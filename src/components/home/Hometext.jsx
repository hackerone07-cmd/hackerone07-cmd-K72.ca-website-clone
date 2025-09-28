import React from "react";
import Video from "./Video";

const Hometext = () => {
  return (
    <div className="font-[font1] pt-3 mt-84 lg:mt-6 text-center text-white">
      <div className="lg:text-[9.5vw] text-[8.5vw] uppercase justify-center flex items-center lg:leading-[8.5vw] leading-[9vw]">
        L'étincelle
      </div>

      <div className="lg:text-[9.5vw] text-[8.5vw] uppercase justify-center flex items-center lg:leading-[8.5vw] leading-[9vw]">
        qui
        <div
        
          className=" h-[7vw]  overflow-hidden rounded-full w-[16vw] -mt-5"
        >
          <Video />
        </div>
        génère
      </div>

      <div className="lg:text-[9.5vw] text-[8.5vw] uppercase justify-center flex items-center lg:leading-[8.5vw] leading-[9vw]">
        la créativité
      </div>
    </div>
  );
};

export default Hometext;

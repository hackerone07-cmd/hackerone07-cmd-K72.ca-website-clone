import React from "react";
import Video from "./Video";

const Hometext = () => {
  return (
    <div className="font-[font1] pt-3 mr-4 text-center text-white">
      <div className="text-[9.5vw] uppercase justify-center flex items-center leading-[8.5vw]">
        L'étincelle
      </div>

      <div className="text-[9.5vw] uppercase justify-center flex items-center leading-[8.5vw]">
        qui
        <div
        
          className=" h-[7vw]  overflow-hidden rounded-full w-[16vw] -mt-5"
        >
          <Video />
        </div>
        génère
      </div>

      <div className="text-[9.5vw] uppercase justify-center flex items-center leading-[8.5vw]">
        la créativité
      </div>
    </div>
  );
};

export default Hometext;

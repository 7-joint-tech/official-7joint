import React from "react";
import { motion as m } from "framer-motion";
import Button from "../Button";




const header = () => {
    const websiteName = "7jointt ech";
    const letter = Array.from(websiteName);
    return (
        <m.header className="overflow-hidden relative bg-main mb-12">
             <div className="flex flex-col items-center justify-center text-center h-screen 2xl:h-auto 2xl:py-[10em]">
                 {/* Logo header image
                <m.div className="relative opacity-0"  animate={{ opacity: [0, 1], y: [10, 0] }}>
                   <img src={bg5} alt="Logo" className= "w-[90px] h-[90px] md:w-[130px] md:h-[130px] mb-4 sm:mb-0 z-10"/> 
                    {/* Background Gradient for the logo 
                    * <m.div className="w-[100px] h-[100px] bg-gradient-to-r from-primary to-secondary absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 blur-3xl"></m.div>
                </m.div> */}
        
        
          {/* h1 tag */}
          <h1 className=" text-primary font-[900] uppercase text-[32px] lg:text-[8vw] xl:text-[108px] leading-[1.1]">
          {letter.map((L, i) => {
            return (
              <m.span
                className={`${i == 5 ? "mr-4 sm:mr-2" : ""} inline-block`}
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0, scale: [1.3, 1] }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  type: "spring",
                }}>
                {" "}
                {L}{" "}
              </m.span>
            );
          })}
        </h1>

         {/* short information about Website */}
         <m.p
          className="my-2 mb-6 opacity-0 px-4 lg:px-[10%] text-base lg:text-[3vw] xl:text-[36px] leading-tight"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.1 }}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda  id aliquid incidunt.
        </m.p>
        <Button label="Read More"/>
             </div>
        </m.header>
       
    );
};

export default header;

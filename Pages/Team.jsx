
import React, { useEffect, useState } from "react";
import TeamCard from "./Info";
import teamData from "./list.json"; 
import Footer from "../src/Footer/Footer";


function Team() {
  return (
    <div className="container mx-auto over ">
      <div className="text-center mt-20 mb-12 ">
        <p className="text-[3em] font-bold text_gradient ">Meet Our Team</p>
      </div>
      <div className="flex justify-center gap-4  over_1 ">
        {teamData.map((member, index) => (
          <TeamCard key={index} data={member} />
        ))}
      </div>
      <Footer />
    </div>
   
  );
}

export default Team;


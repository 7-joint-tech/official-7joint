import React from "react";
import { AiFillLinkedin, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import {motion as m} from "framer-motion";

export default function Info({ data }) {
  return (
    <m.div className="overcard flex flex-col"   animate={{ opacity: [0, 1] }}
    transition={{ duration: 1, delay: 0.05 * data.id }} >
      <img src={data.image} alt="Profile"/>
      <div class="flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="text-xl font-semibold text-gray-500">{data.name}</div>
        <div className="text-gray-500">{data.role}</div>
      </div>
      <div className=" mt-4 flex gap-3 middle">
        <a href={data.linkedin} className="text-2xl">
          <AiFillLinkedin />
        </a>
        <a href={data.twitter} className="text-2xl">
          <AiOutlineTwitter />
        </a>
        <a href={data.whatsapp} className="text-2xl">
          <AiOutlineWhatsApp />
        </a>
      </div>
      </div>
    </m.div>
  );
}

 


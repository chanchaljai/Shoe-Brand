import React from "react";
import pic from "../assets/hero-image.png";
import pica from "../assets/amazon.png"
import picb from "../assets/flipkart.png";

const Hero = () => {
  return (
    <div>
      <div className="md:flex justify-end items-center gap-40 max-w-7xl mx-auto px-4 md:px-12 mt-8">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-8xl font-bold">YOUR FEET </h1>
          <h1 className="text-5xl md:text-8xl font-bold">DESERVE</h1>
          <h1 className="text-5xl md:text-8xl font-bold">THE BEST</h1>
          <p className="mt-8 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            deleniti architecto officiis corrupti dignissimos illo at earum,
            distinctio culpa commodi vel assumenda dicta? ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia totam dolorem ab ad fuga at
            nihil quibusdam incidunt a eos!
          </p>
          <div className="md:hidden">
            <img src={pic} alt="pic" /> 
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-red-700 text-white px-2 py-1 text-lg font-semibold rounded hover:bg-red-600 hover:cursor-pointer">
              Shop Now
            </button>
            <button className="bg-red-700 text-white px-2 py-1 text-lg font-semibold rounded hover:bg-red-600 hover:cursor-pointer">
              Category
            </button>
          </div>
          <div>
            <p className="mt-4 text-sm font-semibold">Also Available On</p>
            <div className="flex gap-4 mt-2">
              <img src={pica} alt="pic" />
              <img src={picb} alt="pic" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:block">
          <img src={pic} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

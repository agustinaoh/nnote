import React from "react";
import HeroImage from "./../img/hero.svg";

export const Hero = () => {
  return (
    <div className="w-full text-white font-body flex items-between">
      <div className="w-2/3 flex flex-col justify-center items-center">
        <div className="w-full mb-8 pr-8">
          <h1
            className="font-display text-nnotes-pink"
            style={{ fontSize: 140 }}
          >
            NNotes
          </h1>
          <h2 className="text-5xl">
            Capture and share your thoughts, anywhere, anytime.
          </h2>
        </div>
        <button className="bg-nnotes-yellow px-6 py-4 rounded-full text-white font-bold shadow-yellow-500/50 shadow-xl">
          Start writing
        </button>
      </div>
      <img src={HeroImage} alt="hero" className="w-1/3" />
    </div>
  );
};

import React from "react";
import { Hero } from "./components/Hero";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
// import { Main } from "./components/Main";

function App() {
  return (
    <div className="bg-nnotes-bg w-screen h-full flex flex-col">
      <TopBar />
      <div className="w-screen h-full flex justify-center items-center  p-24">
        <Hero />
      </div>
      {/*<div className="flex-1">
        <Main />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;

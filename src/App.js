import React from "react";
// import { Hero } from "./components/Hero";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
// import { Main } from "./components/Main";

function App() {
  return (
    <div className="bg-nnotes-bg w-screen min-h-full flex flex-col">
      {/* <div className="w-screen h-full flex justify-center items-center  p-24">
        <Hero />
      </div> */}
      <TopBar />
      {/*<div className="flex-1">
        <Main />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;

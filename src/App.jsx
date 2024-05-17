import React, { useEffect } from "react";
import AppRouter from "./router";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;

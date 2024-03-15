import { useEffect, useState } from "react";
import "./App.css";
import Advice from "./components/Advice";
import axios from "axios";

function App() {
  const [randomAdvice, setAdvice] = useState({});

  async function getAdvice() {
    try {
      const response = await axios("https://api.adviceslip.com/advice");
      if (response.status !== 200) {
        throw new Error("Ooops, something went wrong");
      }
      const { slip } = response.data;
      setAdvice(slip);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <section className="h-full w-full flex justify-center items-center bg-Dark-Blue">
      <Advice randomAdvice={randomAdvice} getAdvice={getAdvice} />
    </section>
  );
}

export default App;

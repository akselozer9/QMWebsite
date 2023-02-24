

import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';


const Home = () => {
 
  //light and dark mode
  const mode = useSelector(state => state.global.mode);
 
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const textArray = [
      "The goal of this project was to make an interactible 3D simulation of the Color-Hardness Box\nExperiments. Click anywhere in the field of experiments 1-3 and electrons will fire into the\nexperiment apparatus and the results of the experiment will be displayed on the score board\nin real time.\n\nBasic Introduction in Quantum Mechanics: Color and shape are two observables measured by black/gold\nand red/blue boxes respectively. An electron's shape can either be diamond or square and an\nelectrons color can either be red or blue. States of electrons can be represented as vectors and\nmeasurement devices can be represented as matrices. Electrons in a state of definite color are\neigenvectors of the color operator and similarly electrons in a state of definite shape are\neigenvectors of the shape operator."
    ];
    const timer = setInterval(() => {
      setText((prevText) => prevText + textArray[counter].charAt(prevText.length));
      if (text.length === textArray[counter].length) {
        setCounter((prevCounter) => prevCounter < textArray.length - 1 ? prevCounter + 1 : 0);
      }
    }, 5);
    return () => {
      clearInterval(timer);
    };
  }, [counter, text]);
 
 
 
 
 
 
  return (
    <div style={{
    
      width: "100%",
      height: "100%"}}>
    <div style={{
     backgroundImage: mode === 'dark' ? "url('/ezgif.com-webp-to-png.png')" : "url('/des3.jpeg')", 
      width: "100%",
      height: "100%"
      }}
    >
    <pre style={{ padding: "20px", fontSize: "20px" }}>{text}</pre>
  
     </div>
    </div>
  )
}

export default Home;



// "url('/ezgif.com-webp-to-png.png')", 

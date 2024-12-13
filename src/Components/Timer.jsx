import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [inp, setInp] = useState("");
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 0) {
            if (minute > 0) {
              setMinute((prevMinute) => prevMinute - 1);
              return 59;
            } else {
              setIsRunning(false);
              clearInterval(interval);
              return 0;
            }
          } else {
            return prevSecond - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minute]);

  const startTimer = () => {
      if (inp !== "" && Number(inp) > 0) {
          setMinute(Number(inp) - 1);
          setSecond(60);
          setIsRunning(true);
        } else {
            console.log("Input boşdur və ya düzgün deyil");
        }
    };
    
    return (
        <div>
      <input
        type="number"
        onChange={(e) => {
            setInp(e.target.value.replace(/[^0-9]/g,""))
        }}
        />
      <button onClick={startTimer}>Start</button>
      <h1>
        {(minute < 10 ? "0" : "") + minute} : {(second < 10 ? "0" : "") + second}
      </h1>
    </div>
  );
};

export default Timer;

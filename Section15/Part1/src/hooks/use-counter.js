import { useEffect, useState } from "react";

const useCounter = (forwards = true, interval = 1000) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const counter = setInterval(() => {
        if(forwards){
            setCounter((prevCounter) => prevCounter + 1);
        }
        else{
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, interval);

    return () => clearInterval(counter);
  }, [forwards, interval]);

  return counter;
};

export default useCounter;
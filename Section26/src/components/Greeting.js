import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(true);
  return (
    <div>
      <h2>Greetings</h2>
      <Output>{changedText ? "My friend" : "Stranger"}</Output>
      <button
        id="button"
        onClick={() => setChangedText((prev) => setChangedText(!prev))}
      >
        Change text
      </button>
    </div>
  );
};

export default Greeting;

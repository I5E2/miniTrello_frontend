import React from "react";
import "./style.css";

import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";

export default function App() {
  const calRef = React.useRef();

  const handleClick = () => {
    const inst = calRef.current.getInstance();
    console.log(inst.getDate());
  };

  return (
    <>
      <button onClick={handleClick}>Test</button>
      <Calendar ref={calRef} />
    </>
  );
}

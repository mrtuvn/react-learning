import { useEffect, useState } from "react";

// Red light: 4000ms
// Yellow light: 500ms
// Green light: 3000ms

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [timeRemaining, setTimeRemaining] = useState(4);

  // Thời gian hiển thị cho từng màu (đơn vị: mili giây)
  const redTime = 4000;
  const yellowTime = 2000;
  const greenTime = 3000;

  useEffect(() => {
    let timerId;
    switch (color) {
      case "red":
        timerId = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);
        setTimeout(() => {
          setColor("green");
          setTimeRemaining(greenTime / 1000);
        }, redTime);
        break;
      case "green":
        timerId = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);
        setTimeout(() => {
          setColor("yellow");
          setTimeRemaining(yellowTime / 1000);
        }, greenTime);
        break;
      case "yellow":
        timerId = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);
        setTimeout(() => {
          setColor("red");
          setTimeRemaining(redTime / 1000);
        }, yellowTime);
        break;
      default:
        "";
        break;
    }

    return () => clearInterval(timerId);
  }, [color]);

  return (
    <div>
      <span className="block">Traffic Light</span>
      <p className="text-center">time remain: {timeRemaining}</p>
      <ul className="mx-auto flex min-w-[40px] max-w-[140px] flex-col items-center justify-center gap-2 rounded bg-black p-3">
        <li
          className={`red h-[100px] w-[100px] min-w-[100px] rounded-full bg-[gray] ${color === "red" ? "!bg-[red]" : ""}`}
        ></li>
        <li
          className={`yellow h-[100px] w-[100px] min-w-[100px] rounded-full bg-[gray] ${color === "yellow" ? "!bg-[yellow]" : ""}`}
        ></li>
        <li
          className={`green h-[100px] w-[100px] min-w-[100px] rounded-full bg-[gray] ${color === "green" ? "!bg-[green]" : ""}`}
        ></li>
      </ul>
    </div>
  );
};

export default TrafficLight;

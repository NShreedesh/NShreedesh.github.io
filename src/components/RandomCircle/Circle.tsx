import { useEffect, useState } from "react";

interface ICircle {
  colors?: string[];
  minimumCircleMoveTime?: number;
  maximumCircleMoveTime?: number;
  minimumSize?: number;
  maximumSize?: number;
}

const defaultColors = ["red", "green", "blue", "yellow", "pink"];

function Circle({
  colors,
  minimumCircleMoveTime,
  maximumCircleMoveTime,
  minimumSize,
  maximumSize,
}: ICircle) {
  const [randomCircleLeft, setRandomCircleLeft] = useState<number>(0);
  const [randomCircleTop, setRandomCircleTop] = useState<number>(0);
  const [size, setSize] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const [translateY, setTranslateY] = useState<number>(0);
  const colorsToUse = colors || defaultColors;

  useEffect(() => {
    setTimeout(() => {
      const randomCircleLeft = Math.floor(Math.random() * 100);
      const randomCircleTop = Math.floor(Math.random() * 100);

      if (randomCircleLeft > 50) {
        setTranslateX(-100);
      } else {
        setTranslateX(100);
      }

      if (randomCircleTop > 50) {
        setTranslateY(-100);
      } else {
        setTranslateY(100);
      }

      setRandomCircleLeft(randomCircleLeft);
      setRandomCircleTop(randomCircleTop);
      setSize(Math.random() * maximumSize! || 30 + minimumSize! || 7);
    }, Math.floor(Math.random() * maximumCircleMoveTime! || 1000 + minimumCircleMoveTime! || 5000));
  }, [randomCircleLeft]);

  return (
    <div
      className="absolute duration-1000 top-10 left-10 -z-20"
      style={{
        left: `${randomCircleLeft}%`,
        top: `${randomCircleTop}%`,
        transform: `translateX(${translateX}%) translateY(${translateY}%)`,
      }}
    >
      <div
        className="duration-1000 rounded-full opacity-60"
        style={{
          width: size,
          height: size,
          backgroundColor:
            colorsToUse[Math.floor(Math.random() * colorsToUse.length)],
        }}
      ></div>
    </div>
  );
}

export default Circle;

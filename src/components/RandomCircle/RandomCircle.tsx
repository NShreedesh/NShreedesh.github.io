import Circle from "./Circle";

export default function RandomCircle() {
  return (
    <div>
      {[...Array(20).keys()].map((_, index) => {
        return (
          <Circle
            minimumCircleMoveTime={5000}
            maximumCircleMoveTime={10000}
            minimumSize={20}
            maximumSize={50}
            key={index}
          />
        );
      })}
    </div>
  );
}

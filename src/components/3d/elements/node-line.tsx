import { Line } from "@react-three/drei";
import { FC } from "react";

interface IProps {
  start: [number, number, number];
  end: [number, number, number];
}

const NodeLine: FC<IProps> = (props) => {
  return (
    <>
      <Line
        points={[props.start, props.end]} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
        color={"#d9d9d9"} // Default
        lineWidth={1} // In pixels (default)
        // segments                        // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
      />
    </>
  );
};

export default NodeLine;

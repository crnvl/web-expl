import getRandomColor from "@/handlers/color-handler";
import { Box, Circle, Plane, Point, Text, Wireframe } from "@react-three/drei";
import { FC } from "react";

interface IProps {
  position: [number, number, number];
  labelText: string;
  url: string;
  color: string;
}

import { Vector3 } from "three";

const WebNode: FC<IProps> = (props) => {
  const translatePosition = new Vector3(
    props.position[0],
    props.position[1] + 0.2,
    props.position[2]
  );

  return (
    <>
      <Text
        position={translatePosition}
        scale={0.1}
        anchorX={"center"}
        anchorY={"top-baseline"}
        characters="abcdefghijklmnopqrstuvwxyz0123456789!"
      >
        {props.labelText}
      </Text>
      <Plane position={props.position} scale={0.15}>
        <meshBasicMaterial color={props.color} />
      </Plane>
    </>
  );
};

export default WebNode;

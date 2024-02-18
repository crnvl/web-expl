import { OrbitControls, PerformanceMonitor, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useEffect, useState } from "react";
import WebNode from "./elements/web-node";
import NodeLine from "./elements/node-line";
import { endpoints } from "@/api/requests";
import generateUniqueKey from "@/handlers/key-handler";
import PostProcessing from "./post-processing";
import getRandomInt from "@/handlers/coord-handler";
import getRandomColor from "@/handlers/color-handler";
import { useVisualizer } from "@/contexts/visualizer-context";

interface ISpawnNodeParams {
  position: [number, number, number];
  previousNodePosition?: [number, number, number];
  labelText: string;
  url: string;
  color: string;
}

const NodeVisualizer: FC = () => {
  const visualizer = useVisualizer();
  const startUrl = visualizer.startUrl || "";
  const resolveNodes = visualizer.scrapeDepth || 0;

  const jsonNodes: ISpawnNodeParams[] = [
    {
      position: [0, 0, 0],
      labelText: startUrl,
      url: startUrl,
      color: getRandomColor(),
    },
  ];

  const [nodes, setNodes] = useState([<></>]);
  const [lines, setLines] = useState([<></>]);
  const [dpr, setDpr] = useState(1.5);

  const addNode = (params: ISpawnNodeParams) => {
    jsonNodes.push({
      position: params.position,
      labelText: params.labelText,
      url: params.url,
      previousNodePosition: params.previousNodePosition,
      color: params.color,
    });
  };

  useEffect(() => {
    const fetchNodes = async () => {
      for (let nodeIndex = 0; nodeIndex < resolveNodes; nodeIndex++) {
        await endpoints.webContent
          .getSiteUrls(jsonNodes[nodeIndex].url)
          .then((response) => {
            if (response.status !== 200) {
              return;
            }

            const urls = response.data.urls;

            for (let i = 0; i < jsonNodes.length; i++) {
              //check if the url is already in the jsonNodes array
              if (jsonNodes.some((node) => node.url === urls[i])) {
                continue;
              }

              const originPosition = jsonNodes[nodeIndex].position;
              const position = [
                getRandomInt(-10, 10) + originPosition[0],
                getRandomInt(-10, 10) + originPosition[1],
                getRandomInt(-10, 10) + originPosition[2],
              ] as [number, number, number];

              addNode({
                position,
                labelText: urls[i],
                url: urls[i],
                previousNodePosition: jsonNodes[nodeIndex].position,
                color: getRandomColor(),
              });
            }

            createNodes();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    };
    fetchNodes();

    function createNodes() {
      const nodes = jsonNodes.map((node) => {
        return (
          <WebNode
            key={generateUniqueKey(10)}
            position={node.position as [number, number, number]}
            labelText={node.labelText}
            url={node.url}
            color={node.color}
          />
        );
      });

      const lines = jsonNodes.map((node, index) => {
        if (index === 0) {
          return <></>;
        }

        return (
          <NodeLine
            key={generateUniqueKey(10)}
            start={
              jsonNodes[index].previousNodePosition as [number, number, number]
            }
            end={node.position as [number, number, number]}
          />
        );
      });

      setNodes(nodes);
      setLines(lines);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="w-screen h-[calc(100vh-74px)]">
        <Suspense fallback={<span>loading...</span>}>
          <Canvas frameloop="demand" dpr={dpr}>
            <Stars fade={true} />
            <PerformanceMonitor
              onIncline={() => setDpr(2)}
              onDecline={() => setDpr(1)}
            />
            <PostProcessing />
            <OrbitControls />
            <ambientLight intensity={10} />
            {nodes}
            {lines}
          </Canvas>
        </Suspense>
      </div>
    </>
  );
};

export default NodeVisualizer;

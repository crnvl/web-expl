import NodeVisualizer from "@/components/3d/node-visualizer";
import { VisualizerContextProvider } from "@/contexts/visualizer-context";
export default function Home() {
  return (
    <>
      <VisualizerContextProvider>
        <NodeVisualizer />
      </VisualizerContextProvider>
    </>
  );
}

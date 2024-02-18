import Link from "next/link";
import { FC, createContext, useContext, useState } from "react";

enum VisualizerState {
  NOT_CONFIGURED,
  CONFIGURED,
}

interface IVisualizerContext {
  visualizerState: VisualizerState;
  startUrl?: string;
  scrapeDepth?: number;
}

const VisualizerContext = createContext<IVisualizerContext>({
  visualizerState: VisualizerState.NOT_CONFIGURED,
});
export const useVisualizer = () => useContext(VisualizerContext);

interface IProps {
  children: React.ReactNode;
}

export const VisualizerContextProvider: FC<IProps> = (props) => {
  const { children } = props;
  const [visualizerState, setVisualizerState] = useState(
    VisualizerState.NOT_CONFIGURED
  );
  const [startUrl, setStartUrl] = useState<string>();
  const [scrapeDepth, setScrapeDepth] = useState<number>();

  const [error, setError] = useState<string>();

  return (
    <VisualizerContext.Provider
      value={{ visualizerState, startUrl, scrapeDepth }}
    >
      {visualizerState === VisualizerState.CONFIGURED ? (
        children
      ) : (
        <>
          <div className="w-screen h-[calc(100vh-74px)] flex flex-row justify-center">
            <div className="text-center max-w-md flex flex-col gap-8 p-8">
              <div>
                <h1 className="text-2xl underline">welcome to web-expl</h1>
                <p className="text-primary">
                  web-expl is a scraper tool, which visualizes the internet in
                  3d space.
                </p>
              </div>
              <div>
                <p className="text-text">
                  To get started, please enter a URL and a depth to scrape.
                  <br />
                  For the best experience, the scrape depth should be less than
                  100. If you decide to go higher, performance might be
                  affected.
                </p>
                <div className="py-8 flex flex-col gap-4 justify-center px-20">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!startUrl || !scrapeDepth) {
                        setError("Please fill out all fields");
                        return;
                      }
                      setError("");
                      setVisualizerState(VisualizerState.CONFIGURED);
                    }}
                  >
                    <div className="flex flex-col justify-center">
                      <h2>Origin URL</h2>
                      <input
                        type="text"
                        placeholder="URL"
                        className="input text-background"
                        onChange={(e) => setStartUrl(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <h2>Scrape Depth</h2>
                      <input
                        type="number"
                        placeholder="Depth"
                        className="input text-background"
                        onChange={(e) =>
                          setScrapeDepth(parseInt(e.target.value))
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary p-2"
                      onClick={(e) => {
                        if (!startUrl || !scrapeDepth) {
                          setError("Please fill out all fields");
                          e.preventDefault();
                        }
                      }}
                    >
                      {">"} Start Visualizer
                    </button>

                    {error && (
                      <p className="text-error text-red-500 p-4">{error}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </VisualizerContext.Provider>
  );
};

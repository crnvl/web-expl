export default function About() {
  return (
    <>
      <div className="w-screen h-full bg-background flex justify-center px-4">
        <div className="py-4 max-w-lg">
          <h1 className="text-2xl underline">about web-expl</h1>
          <p className="text-primary">
            web-expl visualizes the internet in a node-based system in
            3-dimensional space.
            <br />
            The visualizer is based on WebGL using ThreeJS, including responsive
            canvas scaling to run as smoothly as possible across all devices.
            <br />
            <br />
            Content is fetched using web-scraping. The host of this website is
            not responsible for the content of the scraped websites.
          </p>
          <br />
          <h1 className="text-2xl underline">goals</h1>
          <p className="text-primary">
            While this project is still a work-in-progress, the overall goal is
            to develop something similar to a search engine, but in 3D space.
            <br />
            <br />
            Planned and potential features include:
            <ul className="list-disc pl-8">
              <li>Loading indicator</li>
              <li>Overview of all displayed nodes</li>
              <li>Clickable nodes to preview websites</li>
            </ul>
          </p>
          <br />
          <center>Developed with 💖 using NextJS, TailwindCSS and ThreeJS</center>
          <div className="p-16"/>
        </div>
      </div>
    </>
  );
}

import './App.css';
import {Helmet} from "react-helmet";

export default function App() {
  return (
    <>
      <video
        id="my-video"
        className="video-js"
        controls
        preload="auto"
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1648400395/wallhaven-4v32r5_vtploh.jpg"
        data-setup
        loop
      >
        <source
          src="https://nw2.seedr.cc/ff_get/1137206867/Moonfall.2022.1080p.WEBRip.1600MB.DD5.1.x264-GalaxyRG.mkv?st=d32dVQ4DknfbjB27Kq6A_A&e=1648716224"
          type="video/mp4"
        />
      </video>
      <Helmet>
        <script
          src="https://vjs.zencdn.net/5.4.6/video.js"
          type="text/javascript"
        />
      </Helmet>
    </>
  );
}

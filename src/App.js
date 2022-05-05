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
        poster="https://res.cloudinary.com/weknow-creators/image/upload/v1651741465/images/maxresdefault_ki34jp.jpg"
        data-setup
        loop
      >
        <source
          src="https://nl34.seedr.cc/ff_get/1158316488/Sonic%20the%20Hedgehog%202%202022%201080p%20WEB-DL%20AAC%20x264-BluBeast.mkv?st=SM_IYc3speemsySITqTVgA&e=1651766235"
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

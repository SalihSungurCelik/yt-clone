import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";

const VideoDetail = () => {
  // url'den arama(?) parametresini almaya yarayan hook
  const [searchParams] = useSearchParams();
  // ismine göre parametrenin değerine erişme
  const id = searchParams.get("v");
  // console.log(id);
  return (
    <div className="detail-page">
      <div>
        <ReactPlayer
          playing
          controls
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>
      <div>Alakalı içerikler</div>
    </div>
  );
};

export default VideoDetail;

// arama parametrelerine erişmek için useSearchParams() kullanılır.

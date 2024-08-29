import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// RICHTHUMBNAIL AYARLANAMADI!!!!!!!!!!!!!!!!!!!!!!!!!!!
const VideoCard = ({ video }) => {
  // console.log(video.richThumbnail);
  const navigate = useNavigate();
  // const [isHover, setIsHover] = useState(false);
  // console.log(isHover);
  return (
    <div
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      className="cursor-pointer"
    >
      {/* Fotoğraf kısmı */}
      <div>
        <img
          src={video.thumbnail[video.thumbnail.length - 1]?.url}
          className="rounded-lg w-full h-full"
        />
      </div>
      {/* alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          src={
            video.channelThumbnail
              ? video.channelThumbnail[0]?.url
              : "./default.png"
          }
          className="w-14 h-14 rounded-full"
        />
        <div className="text-[#aaa]">
          <h4 className="font-bold text-white"> {video.title} </h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p>{millify(video.viewCount)} görüntülenme</p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

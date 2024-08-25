import millify from "millify";

const VideoCard = ({ video }) => {
  // console.log(video.thumbnail);
  return (
    <div className="cursor-pointer">
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
            video.channelThumbnail[video.channelThumbnail.length - 1]?.url ??
            "./default.png"
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

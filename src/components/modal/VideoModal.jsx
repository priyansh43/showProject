import React, { useEffect } from "react";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center bg-white bg-blur items-center bg-opacity-70">
      <div className="relative md:w-[70.75vw] md:h-[70.80vh]   bg-white ">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-4xl p-2 rounded-full  opacity-70  transition"
        >
          &times;
        </button>

        {/* Video iframe */}
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${new URL(
            videoUrl
          ).searchParams.get("v")}`}
          title="Video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;

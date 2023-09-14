"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Video = () => {
  const videoUrl =
    "https://cdn.pixabay.com/vimeo/849610807/ocean-173530.mp4?width=360&hash=de6ae525ac689219f1ab32778c2da557e12a4070"; // Replace with a valid video URL
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`video-player ${expanded ? "expanded" : ""}`}>
      <motion.div
        className="video-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={toggleExpansion}
      >
        <div className={`video-content ${expanded ? "expanded" : ""}`}>
          <video
            controls
            onDoubleClick={(e) => e.stopPropagation()}
            onClick={toggleExpansion}
            className="video"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      <style jsx>{`
        .video-player {
          width: ${expanded ? "100%" : "300px"};
          transition: width 0.3s;
        }

        .expanded .video-container {
          max-height: ${expanded ? "none" : "calc(56.25vw)"};
        }

        .video-container {
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          aspect-ratio: 16 / 9;
          max-height: ${expanded ? "none" : "calc(56.25vw)"};
          border-radius: ${expanded ? "0" : "50%"};
        }

        .video-content {
          width: 100%;
          height: 90px;
          padding-bottom: 100%; /* Maintain aspect ratio */
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          // padding-bottom: 56.25%;
        }

        .video {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0%;
          right: 0%;
          border: ${expanded ? "none" : "0px solid white"};
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default Video;

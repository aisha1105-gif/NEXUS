import React, { useState } from "react";

const VideoCall = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [audioOn, setAudioOn] = useState(true);

  return (
    <div className="p-4">
      <h2>Video Call</h2>

      <div className="video-box">
        {isCallActive ? "Live Video Stream" : "Call Not Started"}
      </div>

      <button onClick={() => setIsCallActive(true)}>Start Call</button>
      <button onClick={() => setIsCallActive(false)}>End Call</button>

      <button onClick={() => setVideoOn(!videoOn)}>
        {videoOn ? "Turn Video Off" : "Turn Video On"}
      </button>

      <button onClick={() => setAudioOn(!audioOn)}>
        {audioOn ? "Mute" : "Unmute"}
      </button>
    </div>
  );
};

export default VideoCall;

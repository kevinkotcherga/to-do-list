import { useEffect } from "react";

const FaceContainer = () => {
  const eyeContact = () => {
    const face = document.getElementById("face-container")!.style;
    face.setProperty('--eyesX', '50%');
    face.setProperty('--eyesY', '0%');
  }

  useEffect(() => {
    eyeContact();
  }, []);

  return (
    <div id="face-container">
      <div className="face-container__eyes">
        <div className="face-container__eye"><div className="face-container__pupil"></div></div>
        <div className="face-container__eye"><div className="face-container__pupil"></div></div>
      </div>
    </div>
  );
};

export default FaceContainer;

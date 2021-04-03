import React from "react";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const Main = () => {
  return (
    <div className="mainStage">
      <Bounce left>
        <div className="mainTitle">로그인 성공하셨습니다!</div>
      </Bounce>
    </div>
  );
};

export default Main;

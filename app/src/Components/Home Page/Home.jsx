import React from "react";
import "./Home.css";
import Typical from "react-typical";


const Home = () => {
  return (
    <div>
      {/* <h1>This is Home Components</h1> */}
      <img
        src="https://cdn.dribbble.com/users/4781516/screenshots/10796279/media/04eb24250e23400dc0162080a231b70c.gif"
        alt=""
        className="img"
      />
      <div className="div1">
        <h1 className="col1">
          <Typical
            loop={Infinity}
            steps={["ExalTechs Software", 3000, "Web Deyelopment Course", 3000]}
          />
        </h1>

        <h1 className="col2">
          Web <span>Deyelopment</span> Course
        </h1>
        <p className="col3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          cupiditate autem in culpa vero laborum libero ex beatae quibusdam
          consequatur.
        </p>
      </div>
    </div>
  );
};

export default Home;

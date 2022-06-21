import React from "react";

const Options = () => {
  return (
      <div className="row m-auto">
        <div className="col">
          <button className="btn btn-success start-button">Start</button>
        </div>
        <div className="col">
          <button className="btn btn-warning pause-button">Pause</button>
        </div>
        <div className="col">
          <button className="btn btn-primary restart-button">Restart</button>
        </div>
        <div className="row"></div>
      </div>
  );
};

export default Options;

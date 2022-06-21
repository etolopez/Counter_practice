import React from "react";
import PropTypes from "prop-types";
import Options from "./Options";

//create your first component
const Home = (props) => {
  return (
    <div className="container-fluid bg-dark">
      <div className="text-center">
        <div className="row m-auto p-5">
          <div className="col bg-dark text-white m-auto">
            <h3 className="border border-white bg-secondary rounded-2 p-3">
			<i className="far fa-clock"></i>
            </h3>
          </div>
          <div className="col bg-dark text-white m-auto">
            <h3 className="border border-white bg-secondary rounded-2 p-3">
              {props.secs4}
            </h3>
          </div>
          <div className="col bg-dark text-white m-auto">
            <h3 className="border border-white bg-secondary rounded-2 p-3">
              {props.secs3}
            </h3>
          </div>
          <div className="col bg-dark text-white">
            <h3 className="border border-white bg-secondary rounded-2 p-3">
              {props.secs2}
            </h3>
          </div>
          <div className="col bg-dark text-white">
            <h3 className="border border-white bg-secondary rounded-2 p-3">
              {props.secs1}
            </h3>
          </div>
          <div className="col bg-dark text-white">
            <h3 className="border border-white bg-secondary rounded-2 p-3">
              {props.secs}
            </h3>
          </div>
		<Options />
        </div>
      </div>
    </div>
  );
};
Home.propTypes = {
  secs: PropTypes.number,
  secs2: PropTypes.number,
};

export default Home;

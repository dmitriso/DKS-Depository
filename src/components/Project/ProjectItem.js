import React from "react";
import "./ProjectItem.css";

function ProjectItem(props) {
  return (
    <div className="container">
      <div className='card mono-font'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={props.image} alt={props.name} />
          </div>
          <div className='card-back text-center'>
            <h1>{props.name}</h1>
            <a target='__blank' href={props.deployed}>Deployed App</a>
            <br></br>
            <a target='__blank' href={props.repo}>GitHub Repository</a>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
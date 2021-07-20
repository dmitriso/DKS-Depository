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
            <p>{props.description}</p>
            <a target='__blank' href={props.deployed}><i className="fa fa-window-maximize" aria-hidden="true"></i> Deployed</a>
            <br></br>
            <a target='__blank' href={props.repo}><i className="fa fa-github" aria-hidden="true"></i> SourceCode</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
import React from "react";
import "./style.css";

function ProjectItem(props) {
  return (
    <div className="container">
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={props.image} alt={props.name} />
        </div>
        <div className='card-back text-center'>
          <h1>{props.name}</h1>
          <ul>
            <li>
              <a href={props.deployed}>Deployed App</a> 
            </li>
            <li>
            <a href={props.repo}>GitHub Repository</a> 
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>

  
  );
}

export default ProjectItem;
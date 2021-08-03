import React, { Component } from "react";
import ProjectItem from "../Project/ProjectItem";
import DKS from "../../utils/DKS.js"
import "./Depository.css";

class Depository extends Component {
    state = {
        DKS
    };

    render() {
        return (
            <div className="depository-el">
                <h1 id='depository-title'>PROJECTS</h1>
                <section className='cards'>
                    {this.state.DKS.map((item) => (
                        <ProjectItem
                            image={item.image}
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            deployed={item.deployed}
                            repo={item.repo}
                        />
                    ))}
                </section>
            </div>

        );
    };
}


export default Depository;
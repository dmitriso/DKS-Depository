import React, { Component } from "react";
import ProjectItem from "../components/Project/ProjectItem";
import DKS from "../utils/DKS.js"

class Depository extends Component {
    state = {
        DKS
    };

    render() {
        return (
            <div className="background-screen">
                <section className='cards'>
                    {this.state.DKS.map((item) => (
                        <ProjectItem
                            image={item.image}
                            id={item.id}
                            name={item.name}
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
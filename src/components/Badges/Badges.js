import React from 'react';
import "./Badges.css";
import Svg5 from "../../assets/svgs/svg5.svg";

function Badges() {
    return (
        <div className="badge-el">
            <div className="badge-table">
                <div>
                    <h5>Languages</h5>
                    <section className="badge-list">
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                        </div>
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                        </div>
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Javascript" />
                        </div>
                        <div className="badge-item">
                            <img src="	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node" />
                        </div>
                    </section>
                </div>
                <div>
                    <h5>Frameworks</h5>
                    <section className="badge-list">
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                        </div>
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express" />
                        </div>
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="JQuery" />
                        </div>
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                        </div>
                    </section></div>
                <div>
                    <h5>Tech</h5>
                    <section className="badge-list">
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" />
                        </div>
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                        </div>
                    </section>
                </div>
                <div>
                    <h5>Databases</h5>
                    <section className="badge-list">
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                        </div>
                        <div className="badge-item">
                            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                        </div>
                    </section>
                </div>

            </div>
            <img src={Svg5} alt="Svg"/>
        </div>
    )
}

export default Badges;




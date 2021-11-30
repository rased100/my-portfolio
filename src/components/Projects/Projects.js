import React, { useEffect, useState } from 'react';
import SingleProject from '../SingleProject/SingleProject';
import '../../Project.css';

const Projects = () => {
    const [projectInfo, setProjectInfo] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProjectInfo(data))
            .catch(console.log)
    }, []);

    return (
        <div className="project component__space" id="Projects">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p__color">
                    There are many variations of passages of Lorem Ipsum available,
                </p>
                <p className="heading p__color">
                    but the majority have suffered alteration.
                </p>
            </div>
            <div className="container">
                {/* <div className="row"> */}

                {
                    projectInfo.map(projectData => <SingleProject projectData={projectData}></SingleProject>)
                }

                {/* </div> */}
            </div>
        </div>
    );
};

export default Projects;
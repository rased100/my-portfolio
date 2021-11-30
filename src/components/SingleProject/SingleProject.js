import React from 'react';
import '../Projects/Projects.css';

const SingleProject = (props) => {
    const { name, image_banner, live, client, server } = props.projectData;
    return (

        // <div className="col__3">
        <div className="m-5 project__box pointer relative">
            <div className="project__box__img pointer relative">
                <div className="project__img__box">
                    <img src={image_banner} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
            </div>
            <div className=" project__meta absolute">
                <h5 className="project__text">{name}</h5>
                {/* <h5 className="w-75 project__text">{short_description}</h5> */}
                <a href={live} target="_blank" className="project__btn">Live Website</a>
                <a href={client} target="_blank" className="project__btn">Client Site Code</a>
                <a href={server} target="_blank" className="project__btn">Servers Site Code</a>
            </div>
        </div>
        // </div>
    );
};

export default SingleProject;
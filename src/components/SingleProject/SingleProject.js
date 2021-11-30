import React from 'react';
import '../Projects/Projects.css';

const SingleProject = (props) => {
    const { image_banner } = props.projectData;
    return (

        // <div className="col__3">
        <div className="m-5 project__box pointer relative">
            <div className="project__box__img pointer relative">
                <div className="project__img__box">
                    <img src={image_banner} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
            </div>
            <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting tickets to the big show</h4>
                <a href="#" className="project__btn">View Details</a>
            </div>
        </div>
        // </div>
    );
};

export default SingleProject;
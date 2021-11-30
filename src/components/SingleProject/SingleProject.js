import React from 'react';
import '../../Project.css';
import img from '../../img/projects/delivery-banner.jpg'

const SingleProject = (props) => {
    const { image_banner } = props.projectData;
    return (
        <div className="row">
            <div className="col__3">
                <div className="project__box pointer relative">
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
            </div>
        </div>
    );
};

export default SingleProject;
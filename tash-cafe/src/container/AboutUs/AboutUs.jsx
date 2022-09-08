import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
            <img src={images.G} alt="G_overlay" />
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">As we are moving with global trends, resto-bars are one such culture which was present only in abroad, but gradually it has come in India in the form of bar/lounge/bistro. So to keep the trend on The tash cafe was crafted...We offer you the best food & refreshments and their fusions as-well...
                </p>
                <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.knife} alt="about_knife" />
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img" />
                <p className="p__opensans">We started our journey in the pandemic period, not just to be innovative but to also serve good food to the people in need at this hardship of pandemic and we started of with a cloud kitchen and also by reaching out to the poor and serving the food, Now we are happy to start a new phase of a remarkable journey in our new place.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>
        </div>
    </div>
);

export default AboutUs;
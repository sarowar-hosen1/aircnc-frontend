import React, { useState, useEffect } from 'react';
import ExperiencePreloader from '../../Preloader/ExperiencePreloader';
import {FaStar} from 'react-icons/fa';
import './Experiences.css';

const Experiences = () => {

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        fetch('https://aircnc-hotel.herokuapp.com/experiences')
            .then(res => res.json())
            .then(result => setExperiences(result.slice(0, 4)))
    }, [])

    const handleSeeAll = () => {
        fetch('https://aircnc-hotel.herokuapp.com/experiences')
            .then(res => res.json())
            .then(result => setExperiences(result))
    }

    return (
        <div className='mt-4'>
            <div className="d-flex justify-content-between">
                <h5 className='mb-3'>Experiences</h5>
                <button onClick={handleSeeAll} className="btn btn-link">See all</button>
            </div>
            <div className="row">
                {
                    experiences.length ?
                        experiences.map(experience =>
                            <div className="col-md-3 col-sm-6 col-6">
                                <div className='experience-card'>
                                    <img style={{ height: '100px' }} src={experience.picture} alt="" />
                                    <p className='location'><small>{experience.location}</small></p>
                                    <p className='name'>{experience.name}</p>
                                    <p className="p-0 m-0"><small>$ 42 per person</small></p>
                                    <div className="d-flex">
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <p className='font-weight-bold ml-2'>{experience.review}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <ExperiencePreloader></ExperiencePreloader>
                }
            </div>
        </div>
    );
};

export default Experiences;
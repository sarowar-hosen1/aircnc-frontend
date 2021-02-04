import React, { useState, useEffect } from 'react';
import stars from '../../../images/stars.png';
import ExperiencePreloader from '../../Preloader/ExperiencePreloader';
import './Experiences.css';

const Experiences = () => {

    const [experiences, setExperiences] = useState([])
    const sliceExperiences = experiences.slice(0, 4)

    useEffect(() => {
        fetch('https://lit-refuge-15352.herokuapp.com/experiences')
            .then(res => res.json())
            .then(result => setExperiences(result.slice(0, 4)))
    }, [])

    const handleSeeAll = () => {
        fetch('https://lit-refuge-15352.herokuapp.com/experiences')
            .then(res => res.json())
            .then(result => setExperiences(result))
    }

    return (
        <div className='mt-4'>
            <div className="d-flex justify-content-between">
                <h5 className='mb-3'>Experiences</h5>
                <bnt onClick={handleSeeAll} className="btn btn-link">See all</bnt>
            </div>
            <div className="row">
                {
                    experiences.length ?
                        experiences.map(experience =>
                            <div className="col-md-3 col-sm-6 col-6">
                                <div className='card'>
                                    <img style={{ height: '100px' }} src={experience.picture} alt="" />
                                    <p><small className='text-muted'>{experience.location}</small></p>
                                    <p style={{ fontWeight: 'bold', height: '30px' }}>{experience.name}</p>
                                    <p><small>$ 42 per person</small></p>
                                    <p className='d-flex align-items-center'><img src={stars} alt="" />{experience.review}</p>
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
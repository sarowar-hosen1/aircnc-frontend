import React, { useEffect, useState } from 'react';
import stars from '../../../images/stars.png';
import '../Experiences/Experiences.css';

const Homes = () => {
    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch('https://lit-refuge-15352.herokuapp.com/homes')
            .then(res => res.json())
            .then(result => setHomes(result.slice(0, 4)))
    }, [])

    const handleSeeAll = () => {
        fetch('https://lit-refuge-15352.herokuapp.com/homes')
            .then(res => res.json())
            .then(result => setHomes(result))
    }
    
    return (
        <div className='mt-4'>
            <div className="d-flex justify-content-between">
                <h5 className='mb-3'>Homes</h5>
                <bnt onClick={handleSeeAll} className="btn btn-link">See all</bnt>
            </div>
            <div className="row">
                {
                    homes.map(home =>
                        <div className="col-md-3 col-sm-6 col-6">
                            <div className='card'>
                                <img style={{ height: '100px' }} src={home.picture} alt="" />
                                <p><small className='text-muted'>{home.location}</small></p>
                                <p style={{ fontWeight: 'bold', height: '30px' }}>{home.name}</p>
                                <p><small>$ 42 per person</small></p>
                                <p className='d-flex align-items-center'><img src={stars} alt="" />{home.review}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Homes;
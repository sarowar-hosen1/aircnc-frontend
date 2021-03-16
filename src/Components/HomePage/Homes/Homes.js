import React, { useEffect, useState } from 'react';
import HomePreloader from '../../Preloader/HomePreloader';
import { FaStar } from 'react-icons/fa';
import './Homes.css'

const Homes = () => {
    const [homes, setHomes] = useState([])

    useEffect(() => {
        fetch('https://aircnc-hotel.herokuapp.com/homes')
            .then(res => res.json())
            .then(result => setHomes(result.slice(0, 4)))
    }, [])

    const handleSeeAll = () => {
        fetch('https://aircnc-hotel.herokuapp.com/homes')
            .then(res => res.json())
            .then(result => setHomes(result))
    }

    return (
        <div className='mt-4'>
            <div className="d-flex justify-content-between">
                <h5 className='mb-3'>Homes</h5>
                <button onClick={handleSeeAll} className="btn btn-link">See all</button>
            </div>
            <div className="row">
                {
                    homes.length ?
                        homes.map(home =>
                            <div className="col-md-3 col-sm-6 col-6">
                                <div className='home-card'>
                                    <img style={{ height: '100px' }} src={home.picture} alt="" />
                                    <p className="location"><small>{home.location}</small></p>
                                    <p className="name">{home.name}</p>
                                    <p className="p-0 m-0"><small>$ 42 per person</small></p>
                                    <div className='d-flex justify-content-start mt-2'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <p className='ml-2 font-weight-bold'>{home.review}</p>
                                    </div>
                                </div>
                            </div>)
                        :
                        <HomePreloader></HomePreloader>
                }
            </div>
        </div>
    );
};

export default Homes;
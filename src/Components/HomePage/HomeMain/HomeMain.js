import React from 'react';
import Experiences from '../Experiences/Experiences';
import Homes from '../Homes/Homes';
import SearchDestination from '../SearchDestination/SearchDestination';

const HomeMain = () => {
    return (
        <div className="container d-flex">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-12">
                    <div>
                        <SearchDestination key={55}></SearchDestination>
                    </div>
                </div>
                <div className="col-md-8 col-sm-8 col-12">
                    <Experiences key={66}></Experiences>
                    <Homes key={67}></Homes>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;
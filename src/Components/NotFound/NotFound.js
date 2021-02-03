import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height:'100vh'}}>
            <h4>404</h4>
            <h6 className='text-danger'>error</h6>
            <button onClick={() => history.push('/')} className='btn-brand px-5'>Go home</button>
        </div>
    );
};

export default NotFound;
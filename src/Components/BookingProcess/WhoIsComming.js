import React from 'react';
import user from '../../images/user.jpg';

const WhoIsComming = ({handleSecondStep}) => {
    return (
        <div style={{ marginTop: '50px' }}>
            <h6 className='mb-5'>1. Review house role &#8594; 2. Who is comming &#8594; 3.Confirm & Pay</h6>
            <div className="d-flex justify-content-center">
                <div>
                    <h5>Travelling for work?</h5>
                    <p className="text-muted">Say hello to your host</p>
                    <p className="text-muted">Let's rodraw to know a little about yourself why you are comming.</p>
                </div>
                <div>
                    <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={user} alt="" />
                    <p><small className="text-muted text-center">Rodraw</small></p>
                </div>
            </div>
            <form action="">
                <textarea name="message" className="form-control" id="" cols="30" rows="5" style={{resize: "none"}}>Hello rodraw!</textarea>
                <br />
                <input onClick={() => handleSecondStep()} className='btn-brand' type="submit" value="Continue"/>
            </form>
        </div>
    );
};

export default WhoIsComming;
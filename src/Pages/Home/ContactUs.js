import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div className='py-12' style={{
            background: `url(${appointment})`
        }} >
            <div className='my-5'>
                <h3 className='text-primary font-bold text-center'>Conatct Us</h3>
                <h1 className='text-3xl text-white font-bold text-center'>Stay Connected With Us</h1>
            </div>
            <div className='my-5'>
                <div className='text-center m-5'>
                    <input type="email" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs" />

                </div>
                <div className='text-center m-5'>
                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs" />
                </div>
                <div className='text-center m-5'>
                    <textarea className="textarea textarea-info" placeholder="Your Message"></textarea>
                </div>
                <div className='text-center'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
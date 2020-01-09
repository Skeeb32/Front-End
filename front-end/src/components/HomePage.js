import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Welcome to DevDesk!</h2>
                    <Link to='/Login'><button className='devdesk-sign-in-button'>Log In</button></Link>
                    <Link to='/Registration'><button className='welcome-sign-in-button'>Sign Up</button></Link>
                    <Link to='/Registration'><button>Create an Account</button></Link>
                </div>
            </section>
        </div>
    )
};

export default HomePage;
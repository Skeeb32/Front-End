import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <section className='initial-sign-in-page-section'>
                <div>
                    <h2>Welcome!</h2>
                    <Link to='/Login'><button> Log In</button></Link>
                    <Link to='/Registration'><button> Sign Up</button></Link>
                    <Link to='/Registration'><p>Create an Account</p></Link>
                </div>
            </section>
        </div>
    )
};

export default HomePage;
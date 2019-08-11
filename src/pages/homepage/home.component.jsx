import React from 'react';

import Directory from '../../components/directory/directory.component'; 
import './homepage.styles.scss';

const Homepage = ({ history }) => {
    return (
        <div className='homepage'>
            <button onClick={() => history.push('/shop')}>Shop Page</button>
            <div className='directory-menu'>
                <Directory/>
            </div>
        </div>
    );
}

export default Homepage;
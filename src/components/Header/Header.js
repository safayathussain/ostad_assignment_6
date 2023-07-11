import React from 'react';

const Header = ({heading}) => {
    return (
        <div className='px-10 py-5 bg-blue-600 text-white'>
            <p className='text-4xl'>{heading}</p>
        </div>
    );
};

export default Header;
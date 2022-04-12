import React from 'react';

const Foter = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
        <footer className='mt-5 bg-dark'>
            <p><small className='text-light mx-auto'>copyright@{year}</small></p>
        </footer>
    );
};

export default Foter;
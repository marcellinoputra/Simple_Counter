import React, { Component } from 'react';

//Stateless Functional Component
const Navbar = ({totalNumber}) => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href='#'>
                Navbar{" "}
                <span className='badge badge-pill badge-secondary'>
                    {totalNumber}</span>    
            </a>
        </nav>
    );
}
 
export default Navbar;


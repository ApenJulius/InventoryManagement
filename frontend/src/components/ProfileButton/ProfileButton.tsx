import React from 'react';
import { Outlet } from 'react-router-dom';
import defaultUserIcon from './defaultUser.jpg';
const ProfileButton: React.FC = () => {
    // Add your component logic here

    return ( 
        <>
            <button style={{ borderRadius:'50%', height:'50px', width:'50px', backgroundImage:`url(${defaultUserIcon})`, backgroundSize:'contain', float:'right'  }}>
            </button>
            <Outlet />
        </>

    );
};

export default ProfileButton;

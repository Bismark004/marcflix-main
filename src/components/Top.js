import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from '../Assets/Menu.png';
import Logo from '../Assets/tv.png';
import './Top.css';

const Top = () => {
  return (
    <div className='top'>
        <img src={Menu} alt='menu'/>

        <div className='logo'>
            <img src={Logo} alt='logo'/>
            <h2>Marcflix</h2>
        </div>

        <input type='text'placeholder='what do you you want to watch?'/>


    </div>
  )
};

export default Top;

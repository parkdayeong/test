import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate }) => {
  // const [value, setValue] = useState('');
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M Home',
    'Sale',
    '지속가능성',
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToHome = () => {
    navigate('/');
  };

  const handleKeyPress = (event) => {
    // console.log(event.key);
    if (event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className='login-wrap' onClick={goToLogin}>
        <FontAwesomeIcon icon={faUser} style={{ color: '#212121' }} />
        {authenticate ? <p>로그아웃</p> : <p> 로그인</p>}{' '}
      </div>
      <div className='logo-section' onClick={goToHome}>
        {/* <img
          width='70px'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png'
        /> */}
        <h1>로고</h1>
      </div>
      <div className='menu-wrap'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => {
            return <li key={index}>{menu}</li>;
          })}
        </ul>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' placeholder='검색' onKeyPress={handleKeyPress}></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

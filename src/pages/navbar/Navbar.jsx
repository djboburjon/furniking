import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';

function Navbar({cart, setCart, added, setAdded, setLogin, name}) {
  return (
    <div className='nav'>
      <div className="nav_top">
        <div className="container">
          <h3>Welcome to our online shop</h3>
          <div className="nav_top-right">
            <select name="" id="">
              <option value="">English(USD)</option>
              <option value="">O'zbek(UZS)</option>
              <option value="">Россия(РУБЛЬ)</option>
            </select>
            <span>|</span>
            <p>
              <span className='cAccount' onClick={()=>{
                setLogin(true)
              }}>Login</span> or <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
      <div className="nav_bottom">
        <div className="container">
          <NavLink to={'/'}>
            <div className="logo">
              <img src="./imgs/logo.png" alt="Logo image" />
            </div>
          </NavLink>
          <div className='form'>
            <input type="text" placeholder='Search here' />
            <select name="" id="">
              <option value="">Categories</option>
              <option value="">Sofa</option>
              <option value="">Armchair</option>
              <option value="">Table</option>
            </select>
            <div className="search">
              <CiSearch className='search_icon' />
            </div>
          </div>
          <div className="infos">
            <Link to={`/product/added`}>
              <div className="shop" onClick={()=>{
                setAdded(!added)
              }}>
                <span>{cart.length}</span>
                <IoBagHandleOutline className='bag_icon' />
              </div>
            </Link>
            <IoIosNotificationsOutline className='notif_icon' />
            <CiUser className='user_icon' /> <span>{name}</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
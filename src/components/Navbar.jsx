import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import style from '../styling/Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className={style.Navbar}>
      <div className={style.Navbar__info}>
        <h1 className={style.Navbar__title}>Bookstore CMS</h1>
        <ul className={style.Navbar__list}>
          {links.map((link) => (
            <li key={link.id} className={`listItem ${style.Navbar__listItem}`}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className={style.Navbar__userButton}>
        <BsFillPersonFill color="0290ff" size="1rem" />
      </button>
    </nav>
  );
};

export default Navbar;

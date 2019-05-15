import React from 'react';
// import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// const cx = classNames.bind(styles);

const Footer = () => (
  <footer>
    <Link to="/">reactblog</Link>
    <div>관리자 로그인</div>
  </footer>
);

export default Footer;

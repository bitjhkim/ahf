import React from 'react';
// import styles from './Footer.scss';
import classNames from 'classnames/bind';
import { NavLink, withRouter } from 'react-router-dom';

// const cx = classNames.bind(styles);

const Nav = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
            <NavLink exact to="/" className="nav-link" actionStyle="active">
            <span data-feather="file"></span>
            Connect
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/schema" className="nav-link" actionStyle="active">
            <span data-feather="file-text"></span>
            Schema
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/model" className="nav-link" actionStyle="active">
            <span data-feather="layers"></span>
            Model
            </NavLink>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
            <span data-feather="bar-chart-2"></span>
            Workflow
            </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(Nav);

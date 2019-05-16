import React from 'react';
// import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Nav from 'components/common/Nav';

// const cx = classNames.bind(styles);

const PageTemplate = ({children}) => (
  <div>
    <Header/>
    <div className="container-fluid">
      <div className="row">
        {/* <Nav/> */}
        <main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-4">
        {children}
        </main>
      </div>
    </div>
  </div>
);

export default PageTemplate;

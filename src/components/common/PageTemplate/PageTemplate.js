import React from 'react';
import Header from 'components/common/Header';

const PageTemplate = ({children}) => (
  <div>
    <Header/>
    <div className="container-fluid">
      <div className="row">
        <main role="main" className="col-md-12 ml-sm-auto col-lg-12 px-4">
        {children}
        </main>
      </div>
    </div>
  </div>
);

export default PageTemplate;

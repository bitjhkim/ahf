import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { ListPage, PostPage, EditorPage, NotFoundPage } from 'pages';
import { ConnectionPage } from 'pages';
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ConnectionPage}/>
        {/* <Route path="/page/:page" component={ListPage}/>
        <Route path="/tag/:tag/:page?" component={ListPage}/>
        <Route path="/post/:id" component={PostPage}/>
        <Route path="/editor" component={EditorPage}/>
        <Route component={NotFoundPage}/> */}
      </Switch>
    </div>
  );
};

export default App;

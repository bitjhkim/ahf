import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';


class ConnectnionList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // return this.props.todos !== nextProps.todos;
  }  

  render() {
    const { list } = this.props;
    const connectionList = list.map(
      connection => (
        <div>{connection.get('ip')}</div>
      )
    );

    return (
      <div>
        {connectionList}
      </div>
    );
  }
}

export default ConnectnionList;
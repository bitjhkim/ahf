import React, { Component } from 'react';
import { Col, Card, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class ConnectnionList extends Component {
  // constructor (props) {
  //   super(props);
  // }

  handleShowModal = (e) => {
    // const { onSetConnectionId, onShowModal } = this.props;
    const { onShowModal } = this.props;
    const { name } = e.target;
    // onSetConnectionId(name);
    onShowModal({id : name});
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // return this.props.todos !== nextProps.todos;
  // }  

  render() {
    const { handleShowModal } = this;
    const { list } = this.props;

    const mlist = list.reduce((acc, cur, i) => {
      if ( i % 3 === 0 ) acc.push([]);
      acc[Math.floor(i / 3)].push(cur);
      return acc;
    }, []);

    // const connectionList = mlist.map(
    //   list => (
    //     <div className="card-deck mb-3 text-center">
    //       {list.map(
    //         connection => 
    //           <div className="card mb-4 box-shadow">
    //             <div className="card-header">
    //               <h4 className="my-0 font-weight-normal">Free</h4>
    //             </div>
    //             <div className="card-body">
    //               <h1 className="card-title pricing-card-title">{connection.get('ip')}</h1>
    //               <ul className="list-unstyled mt-3 mb-4">
    //                 <li>10 users included</li>
    //                 <li>2 GB of storage</li>
    //                 <li>Email support</li>
    //                 <li>Help center access</li>
    //               </ul>
    //               <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
    //             </div>
    //           </div>
    //         )
    //       }
    //     </div>
    //   )
    // );

    const connectionList = mlist.map(
      (list, ln) => (
        <div className="card-deck mb-3 text-center" key={ln}>
          {list.map(
            (connection, cn) => 
            <Col xl="4" lg="4" md="4" key={cn}>
              <Card>
                <CardHeader>
                {connection.get('name')}
                </CardHeader>
                <CardBody>
                  <CardTitle>{connection.get('ip') + '/ ' + connection.get('schema')}</CardTitle>
                  <CardSubtitle>{connection.get('name')}</CardSubtitle>
                  <CardText>{connection.get('desc')}</CardText>
                  <Button onClick={handleShowModal} name={connection.get('id')}>{connection.get('id') ?  '수정' : '신규'}</Button>
                </CardBody>
              </Card>
            </Col>
            )
          }
        </div>
      )
    );

    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">Connection</h1>
        </div>
        {connectionList}
      </div>
    );
  }
}

export default ConnectnionList;
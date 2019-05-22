import React, { Component } from 'react';
import TreeMenu from 'react-simple-tree-menu'

class SimpleTree extends Component {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('modal shouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  render() {
    
    const { selectedBtnNum, connectionName, treeData } = this.props;
    
    const modTreeData = treeData.map(
      (table) => (
        {
          key: connectionName + '-' + table.categoryName + '-' + table.SchemaName + '-' + table.TableName,
          label: table.TableName,
          nodes: []
        }
      )
    );
    const treeData1 = [
      {
        key: 'first-level-node-1',
        label: 'Node 1 at the first level',
        nodes: [
          {
            key: 'second-level-node-1',
            label: 'Node 1 at the second level',
            nodes: [
              {
                key: 'third-level-node-1',
                label: 'Last node of the branch',
                nodes: [] // you can remove the nodes property or leave it as an empty array
              },
            ],
          },
        ],
      },
      {
        key: 'first-level-node-2',
        label: 'Node 2 at the first level',
      },
    ];
    
    if ( treeData.length ) {
      return <TreeMenu data={modTreeData} />
    } else {
      return null;
    }
  }
}
  
export default SimpleTree;
import React, { Component } from 'react';
import SortableTree from '@nosferatu500/react-sortable-tree';
import '@nosferatu500/react-sortable-tree/style.css'; // This only needs to be imported once in your app
import {  removeNodeAtPath } from '@nosferatu500/react-sortable-tree';

class Sortable extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // treeData: [
            //     { title: "Chicken"},
            //     { title: "Chicken1"},
            //     { title: "Chicken2"},
            // ]
          };
    }
    removeNode=(rowInfo)=>{
        let {node, treeIndex, path} = rowInfo;
        this.props.change_treeData(removeNodeAtPath({
                           treeData: this.props.treeData,
                           path: path,   // You can use path from here
                           getNodeKey: ({node: TreeNode, treeIndex: number}) => {
                               return number;
                           },
                           ignoreCollapsed: false,
                        }))
            

    }
    render() {
        return (
            <React.Fragment>
                <div style={{ height: 400 }}>
                    <SortableTree
                        treeData={this.props.treeData==undefined?[]:this.props.treeData}
                        onChange={treeData => this.props.change_treeData(treeData)}
                        maxDepth={this.props.maxDepth}
                        generateNodeProps={rowInfo => ({
                            buttons: [
                                    <i class="fa-solid fa-x xxz" onClick={(event) => this.removeNode(rowInfo)}></i>
                                   ],
                           
                         })}
                    />
                </div>
            </React.Fragment>
        )
    }
}
export default Sortable;
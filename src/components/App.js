import React, { Component } from 'react';
import TreeNode from './TreeNode';

import data from '../data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tree: data,
      selected: null,
    };
  }

  handleCollapse = (node) => {
    const tree = this.state.tree;
    if (node.type === 'folder') {
      node.collapsed = !node.collapsed;
      this.setState({ tree });
    }
    this.setState({ selected: node });
  }

  render() {
    return (
      <div className="modal-container">
        <div className="modal-header">
          Title
          <i className="modal-close" />
        </div>

        <div className="modal-label">
          Label
        </div>

        <div className="tree-container">
          <TreeNode
            node={this.state.tree}
            onCollapse={this.handleCollapse}
            selected={this.state.selected}
          />
        </div>

        <div className="modal-footer">
          <a href="#">Link</a>
          <button>Done</button>
        </div>
      </div>
    );
  }
}

export default App;

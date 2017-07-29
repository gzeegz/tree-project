import React, { Component } from 'react';
import TreeNode from './TreeNode';

import data from '../data.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tree: data,
      collapsed: {},
      selected: '',
    };
  }

  handleCollapse = (path) => {
    this.setState((prevState, props) => ({
      selected: path,
      collapsed: {
        ...prevState.collapsed,
        [path]: !prevState.collapsed[path],
      },
    }));
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
            collapsed={this.state.collapsed}
            path={''}
            selected={this.state.selected}
            onCollapse={this.handleCollapse}
          />
        </div>

        <div className="modal-footer">
          <a>Link</a>
          <button>Done</button>
        </div>
      </div>
    );
  }
}

export default App;

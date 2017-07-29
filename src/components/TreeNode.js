import React from 'react';
import classNames from 'classnames';

const TreeNode = ({ node, collapsed, path, selected, onCollapse }) => {
  const renderIcon = () => {
    let icon;
    if (node.private && node.type === 'folder') {
      icon = 'tree-private-folder';
    } else if (node.type === 'folder') {
      icon = 'tree-folder';
    } else if (node.type === 'file') {
      icon = 'tree-file';
    }
    return <i className={classNames('tree-icon', icon)} />;
  };

  const renderTreeControl = () => {
    let icon;
    if (node.children && node.children.length !== 0) {
      if (node.collapsed) {
        icon = 'tree-open';
      } else {
        icon = 'tree-close';
      }
      return <i className={classNames('tree-icon', icon)} />;
    }
  };

  let children;
  if (node.children) {
    children = node.children.map((childNode, index) => {
      return (
        <li key={index}>
          <TreeNode
            node={childNode}
            collapsed={collapsed}
            path={`${path}/${childNode.name}`}
            selected={selected}
            onCollapse={onCollapse}
          />
        </li>
      );
    });
  }

  const style = {};
  if (collapsed[path]) {
    style.display = 'none';
  }

  return (
    <div>
      { node.name &&
        <span
          onClick={() => onCollapse(path)}
          className={classNames({ 'tree-item-selected': path === selected})}
        >
          {renderTreeControl()}
          {renderIcon()}
          {node.name}
        </span>
      }

      <ul style={style}>
        {children}
      </ul>
    </div>
  );
};

export default TreeNode;

import React from 'react';
import classNames from 'classnames';

const TreeNode = ({ node, onCollapse, onAdd, selected }) => {
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
            onCollapse={onCollapse}
            selected={selected}
          />
        </li>
      );
    });
  }

  const style = {};
  if (node.collapsed) {
    style.display = 'none';
  }

  return (
    <div>
      { node.name &&
        <span
          onClick={() => onCollapse(node)}
          className={classNames({ 'tree-item-selected': node === selected})}
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

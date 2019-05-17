import React, {PureComponent} from 'react';

export default class Item extends PureComponent {
  handleClick = () => {
    const {id, onClick} = this.props;

    onClick(id);
  };

  render() {
    const {message, shift} = this.props;

    return (
      <p
        onClick={this.handleClick}
        style={{
          cursor: 'pointer',
          transform: `translate(${shift * 100}%, 0%)`,
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
          width: 120
        }}
      >
        {message}
      </p>
    );
  }
}

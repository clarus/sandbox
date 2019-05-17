import React, {PureComponent} from 'react';

export default class Item extends PureComponent {
  handleClick = () => {
    const {id, onClick} = this.props;

    onClick(id);
  };

  render() {
    const {message} = this.props;

    return (
      <p
        onClick={this.handleClick}
        style={{
          cursor: 'pointer',
          width: 120
        }}
      >
        {message}
      </p>
    );
  }
}

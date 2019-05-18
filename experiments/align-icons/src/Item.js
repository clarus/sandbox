import React, {PureComponent} from 'react';

export default class Item extends PureComponent {
  render() {
    const {message} = this.props;

    return (
      <p style={{width: 120}}>
        {message}
      </p>
    );
  }
}

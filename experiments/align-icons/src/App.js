import React, {PureComponent} from 'react';
import './App.css';
import Item from './Item';
import items from './items';

export default class App extends PureComponent {
  state = {
    id: items[0].id
  };

  handleClick = (id) => {
    this.setState({id});
  };

  render() {
    const {id} = this.state;
    const itemIndex = items.findIndex(item => item.id === id);
    const shift = (items.length - 1) / 2 - itemIndex;

    return (
      <div className="App">
        <header className="App-header">
          <p>↓</p>
          <div style={{
            display: 'flex',
            transform: `translate(${shift * 120}px, 0px)`,
            transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
          }}>
            {items.map(item => 
              <Item
                id={item.id}
                key={item.id}
                message={item.message}
                onClick={this.handleClick}
              />
            )}
          </div>
          <p>↑</p>
        </header>
      </div>
    );
  }
}

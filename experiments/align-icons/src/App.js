import React, {PureComponent} from 'react';
import './App.css';
import Item from './Item';
import items from './items';

export default class App extends PureComponent {
  state = {
    id: items[0].id,
    mouseCurrentX: null,
    mouseStartX: null
  };

  getItemIndex() {
    const {id} = this.state;

    return items.findIndex(item => item.id === id);
  }

  handleClick = (id) => {
    this.setState({id});
  };

  handleMouseDown = (event) => {
    console.log('Down');
    this.setState({mouseCurrentX: event.clientX, mouseStartX: event.clientX});
  };

  handleMouseMove = (event) => {
    this.setState({mouseCurrentX: event.clientX});
    const {mouseStartX} = this.state;

    if (typeof mouseStartX === 'number') {
      console.log('Move', event.clientX - this.state.mouseStartX);
    }
  };

  handleMouseLeaveOrUp = () => {
    console.log('Up');
    const {mouseCurrentX, mouseStartX} = this.state;
    const shiftPixels = mouseCurrentX - mouseStartX;
    const shiftIndex = Math.round(shiftPixels / 120);
    const newUnboundedIndex = this.getItemIndex() - shiftIndex;
    const newIndex = Math.max(Math.min(newUnboundedIndex, items.length - 1), 0);
    this.setState({
      id: items[newIndex].id,
      mouseCurrentX: null,
      mouseStartX: null
    });
  };

  render() {
    const {mouseCurrentX, mouseStartX} = this.state;
    const shiftIndexPixels = 120 * ((items.length - 1) / 2 - this.getItemIndex());
    const shiftDragPixels = mouseCurrentX && mouseStartX ? mouseCurrentX - mouseStartX : 0;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Drag & Drop</h1>
          <p>↓</p>
          <div
            onMouseDown={this.handleMouseDown}
            onMouseLeave={this.handleMouseLeaveOrUp}
            onMouseMove={this.handleMouseMove}
            onMouseUp={this.handleMouseLeaveOrUp}
            style={{
              cursor: 'pointer',
              display: 'flex',
              transform: `translate(${shiftIndexPixels + shiftDragPixels}px, 0px)`,
              ...(!(mouseCurrentX && mouseStartX)
                ? {transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'}
                : {}
              ),
            }}
          >
            {items.map(item => 
              <Item
                key={item.id}
                message={item.message}
              />
            )}
          </div>
          <p>↑</p>
        </header>
      </div>
    );
  }
}

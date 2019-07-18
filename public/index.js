import ReactAntDrawer from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import { Button } from 'antd';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false,
    value2: false
  };

  _onChange = (e) => {
    const { value } = e.target;
    this.setState({ value });
  };

  _onChange2 = (e) => {
    const { value } = e.target;
    this.setState({ value2: value });
  };

  _onClick = (e) => {
    this.setState({ value: true });
  };

  _onClick2 = (e) => {
    this.setState({ value2: true });
  };

  render() {
    const { value, value2 } = this.state;
    console.log('value,value2', value, value2);
    return (
      <div className="app-container">
        <Button onClick={this._onClick}>ShowDrawer</Button>
        <ReactAntDrawer onChange={this._onChange} value={value}>
          <ReactAntDrawer
            onChange={this._onChange2}
            value={value2}></ReactAntDrawer>
          <Button onClick={this._onClick2}>SHow Drawer!!!</Button>
        </ReactAntDrawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

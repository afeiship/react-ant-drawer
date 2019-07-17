import ReactAntDrawer from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import { Button } from 'antd';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: false
  };

  _onChange = (e) => {
    const { value } = e.target;
    console.log('value:->', value);
  };

  _onClick = (e) => {
    this.setState({ value: true });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="app-container">
        <Button onClick={this._onClick}>ShowDrawer</Button>
        <ReactAntDrawer onChange={this._onChange} value={value} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Drawer } from 'antd';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.bool
  };

  static defaultProps = {
    onClose: noop,
    onChange: noop,
    value: false
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    const _value = this.state.value;
    if (value !== _value) {
      this.change(value);
    }
  }

  change(inValue, inCallback) {
    const callback = inCallback || noop;
    const target = { value: inValue };
    this.setState(target, () => {
      callback(inValue);
    });
  }

  _onClose = (inEvent) => {
    const { onClose } = this.props;
    this.change(false, () => {
      onClose(inEvent);
    });
  };

  _onAfterVisibleChange = (inEvent) => {
    const { onChange } = this.props;
    onChange({ target: { value: inEvent } });
  };

  render() {
    const { value, onChange, onClose, ...props } = this.props;
    const _value = this.state.value;
    return (
      <Drawer
        afterVisibleChange={this._onAfterVisibleChange}
        onClose={this._onClose}
        visible={_value}
        {...props}
      />
    );
  }
}

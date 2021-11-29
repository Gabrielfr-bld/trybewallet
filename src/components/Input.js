import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Input.css';

class Input extends Component {
  render() {
    const { label, name, type, id, onChange, value } = this.props;
    return (
      <label htmlFor={ id } className="expense">
        { label }
        { ' ' }
        <input
          id={ id }
          type={ type }
          value={ value }
          onChange={ onChange }
          name={ name }
          className="form-control"
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;

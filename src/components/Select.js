import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { label, options, id, onChange, value } = this.props;
    return (
      <label htmlFor={ id } className="selectExpense">
        { label }
        { ' ' }
        <select
          id={ id }
          value={ value }
          onChange={ onChange }
          className="select"
        >
          { options.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>)) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Select.defaultProps = {
  value: '',
};

export default Select;

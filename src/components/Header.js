import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/Header.css';

class Header extends Component {
  render() {
    const { user, expenses } = this.props;

    const calcExpense = expenses.reduce((acc, { value, exchangeRates, currency }) => (
      acc + value * exchangeRates[currency].ask), 0);

    return (
      <header>
        <img alt="Ícone Carteira" src="https://image.flaticon.com/icons/png/512/218/218390.png" />
        <h2 data-testid="email-field" className="calcCurrency">
          Email:
          {' '}
          { user.email }
        </h2>
        <p data-testid="total-field" className="calcCurrency">
          Despesa Total: R$
          {' '}
          {
            calcExpense
          }
        </p>
        <p data-testid="header-currency-field" className="calcCurrency">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, null)(Header);

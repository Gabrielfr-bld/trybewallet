import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../actions';
import '../css/Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  validEmail() {
    const PASSWORD_LENGTH = 6;
    const { email, password } = this.state;
    const valid = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(valid) && password.length >= PASSWORD_LENGTH) return false;
    return true;
  }

  handleClick() {
    const { email } = this.state;
    const { userLogin, history } = this.props;
    userLogin(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className="h1">Login</h1>
        <form id="form">
          <div className="input-group mb-3">
            <label htmlFor="email">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email"
                value={ email }
                data-testid="email-input"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="Senha"
                value={ password }
                data-testid="password-input"
                onChange={ this.handleChange }
              />
            </label>
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={ this.validEmail() }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(userAction(email)),
});

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

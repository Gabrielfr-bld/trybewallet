import { GET_CURRENCIES, ADD_EXPENSES } from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state, currencies: action.payload,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.payload }],
    };
  default:
    return state;
  }
};

export default walletReducer;

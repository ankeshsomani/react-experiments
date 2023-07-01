import {
  CREATE_EXPENSE,
  RETRIEVE_EXPENSES,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  DELETE_ALL_EXPENSES,
} from "../actions/type";

const initialState = [];

function expenseReducer(expenses = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_EXPENSE:
      return [...expenses, payload];

    case RETRIEVE_EXPENSES:
      return payload;

    case UPDATE_EXPENSE:
      return expenses.map((expense) => {
        if (expense.id === payload.id) {
          return {
            ...expense,
            ...payload,
          };
        } else {
          return expense;
        }
      });

    case DELETE_EXPENSE:
      return expenses.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_EXPENSES:
      return [];

    default:
      return expenses;
  }
};
export default expenseReducer;

import { CREATE_EXPENSE, RETRIEVE_EXPENSES, UPDATE_EXPENSE, DELETE_EXPENSE, DELETE_ALL_EXPENSES } from "./type";
import ExpenseDataService from "../services/expense.service";


export const createExpense = (title, description) => async (dispatch) => {
  try {
    const res = await ExpenseDataService.create({ title, description });

    dispatch({
      type: CREATE_EXPENSE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveExpenses = () => async (dispatch) => {
  try {
    const res = await ExpenseDataService.getAll();

    dispatch({
      type: RETRIEVE_EXPENSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateExpense = (id, data) => async (dispatch) => {
  try {
    const res = await ExpenseDataService.update(id, data);

    dispatch({
      type: UPDATE_EXPENSE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteExpense = (id) => async (dispatch) => {
  try {
    await ExpenseDataService.delete(id);

    dispatch({
      type: DELETE_EXPENSE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllExpenses = () => async (dispatch) => {
  try {
    const res = await ExpenseDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_EXPENSES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findExpensesByTitle = (title) => async (dispatch) => {
  try {
    const res = await ExpenseDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_EXPENSES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
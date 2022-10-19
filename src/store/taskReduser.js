import { taskDeleted, taskUpdated } from "./actionType";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case taskUpdated:
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = { ...newArray[elementIndex], ...action.payload };
      return newArray;
    case taskDeleted:
      const newArr = [...state];
      const arrAfterDel = newArr.filter((el) => el.id !== action.payload.id);
      return arrAfterDel;

    default:
      return state;
  }
}

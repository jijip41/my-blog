import { createContext, PropsWithChildren, useReducer } from "react";
import { Category } from "../utils/getCategory";

interface CategoryContextInterface {
  state: Category[];
  dispatch: (_action: CategoryAction) => void;
}

export enum CategoryActionType {
  AddCategory = "ADD_CATEGORY",
  RemoveCategory = "REMOVE_CATEGORY",
}

export interface CategoryAction {
  type: CategoryActionType;
  payload: Category;
}

const categoryReducer = (
  state: Category[],
  action: CategoryAction
): Category[] => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return [...state, action.payload];
    case "REMOVE_CATEGORY":
      return state.filter((category) => category !== action.payload);
    default:
      return state;
  }
};

const initialState: Category[] = [];

export const CategoryContext = createContext<CategoryContextInterface>({
  state: initialState,
  dispatch: (_action: CategoryAction) => {},
});

interface CategoryProviderProps extends PropsWithChildren {}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [state, dispatch] = useReducer(categoryReducer, initialState);
  return (
    <CategoryContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

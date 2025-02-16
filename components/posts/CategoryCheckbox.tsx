"use client";

import {
  CategoryActionType,
  CategoryContext,
} from "../../src/app/context/categoryContext";
import { useContext } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Category, getRealCategoryName } from "@/lib/category";

interface Props {
  label: Category;
}

export function CategoryCheckbox({ label }: Props) {
  const { state, dispatch } = useContext(CategoryContext);

  const isSelected = state.some((category) => category === label);

  function onClick() {
    if (isSelected) {
      dispatch({ type: CategoryActionType.RemoveCategory, payload: label });
      return;
    }
    if (label) {
      dispatch({
        type: CategoryActionType.AddCategory,
        payload: label,
      });
    }
  }
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="all" checked={isSelected} onClick={onClick} />
      <label
        htmlFor="all"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500"
      >
        {getRealCategoryName(label)}
      </label>
    </div>
  );
}

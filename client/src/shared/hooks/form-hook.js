import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const id in state.inputs) {
        if (!state.inputs[id]) continue;
        if (id === action.id) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[id].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.id]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    case "SET_PLACE":
      return {
        inputs: action.initPlace,
        isValid: action.formValidity
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialValidity
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", id, value, isValid });
  }, []);

  const setFormData = useCallback((initPlace, formValidity) => {
    dispatch({ type: "SET_PLACE", initPlace, formValidity })
  },[])

  return [formState, inputHandler, setFormData];
}

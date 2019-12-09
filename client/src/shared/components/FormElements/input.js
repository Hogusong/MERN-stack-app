import React, { useReducer } from "react";

import "../../../css/input.css";
import { validate } from "../../utilities/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true
      };
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false
  });

  const { isValid, isTouched } = inputState;

  const changeHandler = event => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={`form-control ${!isValid && isTouched && "invalid"}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!isValid && isTouched && <p>{props.errMessage}</p>}
    </div>
  );
};

export default Input;

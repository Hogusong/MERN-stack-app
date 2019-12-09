import React, { useReducer, useEffect } from "react";

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
    value: props.initValue || "",
    isValid: props.initValid || false,
    isTouched: false
  });

  const { value, isValid, isTouched } = inputState;
  const { id, onInput } = props;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

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

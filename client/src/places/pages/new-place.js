import React, { useReducer, useCallback } from "react";

import "../../css/new-place.css";
import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/button";
import Card from "../../shared/components/UIElements/card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/utilities/validators";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const id in state.inputs) {
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
    default:
      return state;
  }
};

const NewPlace = () => {

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
      address: { value: "", isValid: false }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", id, value, isValid });
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // send data to server later...
    console.log("Submitted...", formState.inputs);
  }

  return (
    <Card className="add-place">
      <h2 className="center">Add a Place</h2>
      <form className="place-form" onSubmit={onSubmitHandler}>
        <Input 
          id="title"
          type="text"
          label="Title"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errMessage="Please enter a valid title!"
          onInput={inputHandler}
          />
        <Input
          id="description"
          type="text"
          label="Description"
          element="textarea"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errMessage="Please enter a valid description(at least 5 characters)!"
          onInput={inputHandler}
          />
        <Input
          id="address"
          type="text"
          label="Address"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errMessage="Please enter a valid address!"
          onInput={inputHandler}
          />
        <div className="new-place-btn">
          <Button type="submit" primary disabled={!formState.isValid}>
            SUBMIT
          </Button>
        </div>
      </form>
    </Card>
  )
};

export default NewPlace;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../../css/new-place.css";
import PLACES from "../../shared/dummy-data/places";
import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/utilities/validators";
import { useForm } from "../../shared/hooks/form-hook";

const EditPlace = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
      address: { value: "", isValid: false }
    },
    false
  );

  const id = useParams().id;
  const place = PLACES.find(p => p.id === id);

  useEffect(() => {
    if (place) {
      setFormData(
        {
          title: { value: place.title, isValid: true },
          description: { value: place.description, isValid: true },
          address: { value: place.address, isValid: true }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, place]);

  const onSubmitHandler = event => {
    event.preventDefault();
    // send data to server later...
    console.log("Submitted", formState);
  };

  if (!place) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...!</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={onSubmitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errMessage="Please enter a valid title!"
        onInput={inputHandler}
        initValue={formState.inputs.title.value}
        initValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errMessage="Please enter a valid description(at least 5 characters)!"
        onInput={inputHandler}
        initValue={formState.inputs.description.value}
        initValid={formState.inputs.description.isValid}
      />
      <Input
        id="address"
        type="text"
        label="Address"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errMessage="Please enter a valid address!"
        onInput={inputHandler}
        initValue={formState.inputs.address.value}
        initValid={formState.inputs.address.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default EditPlace;

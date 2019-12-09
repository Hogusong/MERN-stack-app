import React, { useState, useContext } from "react";

import "../../css/auth.css";
import Input from "../../shared/components/FormElements/input";
import Button from "../../shared/components/FormElements/button";
import Card from "../../shared/components/UIElements/card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL
} from "../../shared/utilities/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);

  const [isSignUp, setSignUp] = useState(false);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const switchModeHandler = () => {
    if (isSignUp) {
      setFormData(    
        {
          ...formState.inputs,
          username: undefined,
          confirmPass: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(    
        {
          ...formState.inputs,
          username: { value: "", isValid: false },
          confirmPass: { value: "", isValid: false }
        },
        false
      );
    };

    setSignUp(!isSignUp);
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    if (isSignUp) {
      if (formState.inputs.password.value === formState.inputs.confirmPass.value) {
        auth.login('u2');
      } else {
        console.log('Passwords are not matched...');
      }
    } else {
      auth.login('u2');
    }
  };

  return (
    <Card className="authentication">
      <h2 className="center">{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form className="place-form" onSubmit={onSubmitHandler}>
        {isSignUp && <Input
          id="username"
          type="text"
          label="Username"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errMessage="Please enter a valid username!"
          onInput={inputHandler}
        />}
        <Input
          id="email"
          type="email"
          label="E-mail"
          element="input"
          validators={[VALIDATOR_EMAIL()]}
          errMessage="Please enter a valid email!"
          onInput={inputHandler}
        />
        <Input
          id="password"
          type="Password"
          label="Password"
          element="input"
          validators={[VALIDATOR_MINLENGTH(4)]}
          errMessage="Please enter a valid password!"
          onInput={inputHandler}
        />
        {isSignUp && <Input
          id="confirmPass"
          type="Password"
          label="Confirm Password"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errMessage="Please enter a valid password!"
          onInput={inputHandler}
        />}
        <div className="auth-btn">
          <Button type="button" inverse onClick={switchModeHandler}>
              {isSignUp ? 'Switch to LOGIN': 'Switch to SIGNUP'}
          </Button>
          <Button type="submit" primary disabled={!formState.isValid}>
            {isSignUp ? 'Sign Up': 'Login'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Auth;

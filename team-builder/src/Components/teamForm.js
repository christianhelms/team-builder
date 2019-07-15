import React, { useState } from "react";

function teamForm() {
  const [formState, setFormState] = useState({
    name: "",
    role: "",
    gender: ""
  });

  const submitHandler = event => {
    event.preventDefault();
  };

  const changeHandler = event => {
    console.log(formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Enter your username"
            onChange={changeHandler}
          />
        </label>
        <label>
          Role
          <input
            name="role"
            type="text"
            placeholder="Enter your role"
            value={formState.role}
            onChange={changeHandler}
          />
        </label>
        <label>
          Gender
          <input
            name="gender"
            type="text"
            placeholder="Enter your gender"
            value={formState.gender}
            onChange={changeHandler}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default teamForm;

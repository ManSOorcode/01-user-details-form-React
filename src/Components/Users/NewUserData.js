import React, { useState } from "react";

import InvalidInput from "../ModelWindow/InvalidInput";

import InvalidAge from "../ModelWindow/InvalidAge";

const NewUserData = (props) => {
  const [enterUserName, setUserName] = useState("");
  const [enterUserAge, setUserAge] = useState("");

  const [modal, setModal] = useState(true);
  const nameChangehandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangehandler = (event) => {
    setUserAge(event.target.value);
  };

  let modalValue = modal;
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event.target);

    if (enterUserName !== "" && enterUserAge !== "") {
      const newUserData = {
        username: enterUserName,
        userage: enterUserAge,
      };
      props.onUserData(newUserData);

      modalValue = modal;
    }

    // onClose(setModal(false));

    setUserName("");
    setUserAge("");
  };

  const openHandeler = () => {
    return modalValue;
  };

  const closeHandeler = () => {
    console.log(modalValue);
    console.log(setModal(modalValue));
    // return setModal(null);
  };

  return (
    <div>
      <InvalidInput onOpen={openHandeler} onClose={closeHandeler} />
      {/* <InvalidAge onOpen={openHandeler} onClose={closeHandeler} /> */}
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username :</label>
        <input
          id="userName"
          value={enterUserName}
          type="text"
          onChange={nameChangehandler}
        />
        <label htmlFor="age">Age (Years) :</label>
        <input
          id="age"
          type="number"
          value={enterUserAge}
          onChange={ageChangehandler}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUserData;

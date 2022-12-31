import React, { useState } from "react";

import InvalidInput from "../ModelWindow/InvalidInput";

import InvalidAge from "../ModelWindow/InvalidAge";

const NewUserData = (props) => {
  const [enterUserName, setUserName] = useState("");
  const [enterUserAge, setUserAge] = useState("");

  const [modal, setModal] = useState(false);

  const nameChangehandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangehandler = (event) => {
    setUserAge(event.target.value);
  };

  // let ModalWindow = (prione, pritwo) => {
  //   <InvalidInput
  //     onOpen={() => {
  //       return prione;
  //     }}
  //     onClose={() => {
  //       return pritwo;
  //     }}
  //   />;
  // };
  const addUserHandler = (event) => {
    event.preventDefault();

    if (enterUserName !== "" && enterUserAge !== "") {
      const newUserData = {
        username: enterUserName,
        userage: enterUserAge,
      };
      props.onUserData(newUserData);

      // modalValue = modal;
    }

    if (enterUserName == "" && enterUserAge == "") {
      setModal("input");
    } else if (enterUserAge < 0) {
      setModal("negative");
    }

    // modalValue = modal;

    // onClose(setModal(false));

    setUserName("");
    setUserAge("");
    // console.log(false);
    // setModal(true);

    // console.log(event.target);
  };

  const openHandeler = () => {
    return true;
  };

  // // console.log(useState(false));

  const closeHandeler = () => {
    return setModal(false);
  };
  // onClick={() => setModal(true)}
  return (
    <div>
      {modal == "input" && (
        <InvalidInput onOpen={openHandeler} onClose={closeHandeler} />
      )}
      {modal == "negative" && (
        <InvalidAge onOpen={openHandeler} onClose={closeHandeler} />
      )}
      {/* <ModalWindow /> */}
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

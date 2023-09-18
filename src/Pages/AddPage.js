import React from "react";

import FormPage from "../Components/FormPage";

function AddPage() {
  const dogsJson = localStorage.getItem("dogs");
  const dogsList = JSON.parse(dogsJson) || [];

  let nextId = dogsList.length;

  function validateAdd(value) {
    const lowerCaseDogsList = dogsList.map((item) => item.name.toLowerCase());

    let error;

    if (!value) {
      error = "Required";
    } else if (lowerCaseDogsList.includes(value.toLowerCase())) {
      error = "Dog already registered";
    }

    return error;
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container d-flex-column p-5 rounded bg-white ">
          <FormPage
            tittle={"Add Dog"}
            id={nextId}
            dogsList={dogsList}
            validation={validateAdd}
          />
        </div>
      </div>
    </>
  );
}

export default AddPage;

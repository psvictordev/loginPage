import React from "react";
import { useParams } from "react-router-dom";

import FormPage from "../Components/FormPage";

function EditPage() {
  const dogsJson = localStorage.getItem("dogs");
  let dogsList = JSON.parse(dogsJson) || [];

  const { id } = useParams();
  const getDog = dogsList[id];

  function validateEdit(value) {
    let error;

    const lowerCaseDogsList = dogsList.map((item) => item.name.toLowerCase());

    const index = lowerCaseDogsList.indexOf(getDog.name.toLowerCase());

    if (index !== -1) {
      lowerCaseDogsList.splice(index, 1);
    }

    if (!value) {
      error = "Required";
    } else if (lowerCaseDogsList.includes(value.toLowerCase())) {
      error = "Dog already registered";
    }

    return error;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white ">
        <FormPage
          tittle={"Edit Dog"}
          id={getDog.id}
          dogsList={dogsList}
          name={getDog.name}
          age={getDog.age}
          breed={getDog.breed}
          getDog={getDog}
          validation={validateEdit}
        />
      </div>
    </div>
  );
}

export default EditPage;

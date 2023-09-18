import React from "react";
import { useNavigate } from "react-router-dom";

import DogAPI from "./DogAPI";
import { useAlert } from "../Context/AlertContext";

import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";

function FormPage({
  tittle,
  id,
  dogsList,
  name = "",
  age = "",
  breed = "",
  getDog = "",
  validation = "",
}) {
  function validate(value) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }

  const navigate = useNavigate();

  const { showAlert } = useAlert();

  const handleClick = () => {
    showAlert();
  };

  return (
    <div>
      <h1>{tittle}</h1>
      <Formik
        initialValues={{
          id: id,
          name: name,
          age: age,
          breed: breed,
        }}
        onSubmit={(values) => {
          const index = dogsList.indexOf(getDog);

          if (index !== -1) {
            dogsList[id] = values;
            localStorage.setItem("dogs", JSON.stringify(dogsList));
          } else {
            const newDog = [...dogsList, values];
            localStorage.setItem("dogs", JSON.stringify(newDog));
          }
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                id="name"
                name="name"
                placeholder="Enter Name"
                validate={validation}
              />
              {errors.name && touched.name && (
                <div className="text-danger">{errors.name}</div>
              )}
            </div>

            <div>
              <label htmlFor="age">Age: </label>
              <Field
                id="age"
                name="age"
                placeholder="Enter Age"
                validate={validate}
              />
              {errors.age && touched.age && (
                <div className="text-danger">{errors.age}</div>
              )}
            </div>

            <div>
              <label htmlFor="breed">Breed: </label>
              <Field id="breed" name="breed" as="select" validate={validate}>
                <option>{breed}</option>
                <DogAPI />
              </Field>
              {errors.breed && touched.breed && (
                <div className="text-danger">{errors.breed}</div>
              )}
            </div>

            <Button type="submit" onClick={handleClick}>
              Save
            </Button>

            <Button onClick={() => navigate("/")}>Cancel</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormPage;

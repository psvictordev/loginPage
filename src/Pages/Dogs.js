import React from "react";
import { useNavigate } from "react-router-dom";

import { useAlert } from "../Context/AlertContext";
import Alert from "../Components/Alert";

function Dogs() {
  const usuario = localStorage.getItem("usuario");
  const navigate = useNavigate();

  const dogsJson = localStorage.getItem("dogs");
  const dogsList = JSON.parse(dogsJson) || [];

  const signOut = () => {
    localStorage.clear();

    navigate("login");
  };

  const addDog = (e) => navigate(`${e}`);

  const editBtn = function (e) {
    return navigate(`/Dogs/${e}/EditPage`);
  };

  const { alert, showAlert, hideAlert } = useAlert();

  function removeBtn(e) {
    const index = dogsList.indexOf(dogsList[e]);

    if (index !== -1) {
      dogsList.splice(index, 1);
    }

    let nextId = 0;

    dogsList.forEach((item) => {
      item.id = nextId++;
    });

    localStorage.setItem("dogs", JSON.stringify(dogsList));

    showAlert();

    navigate("/");
  }

  return (
    <div>
      <div className="login templete d-flex justify-content-center align-items-center vh-100 bg-primary">
        <div className="form_container p-5 rounded bg-white ">
          <h3 className="text-center">Dogs of {usuario}</h3>
          <div>
            {alert && (
              <Alert
                message={alert.message}
                type={alert.type}
                onClose={hideAlert}
              />
            )}
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary"
              onClick={() => addDog("/Dogs/AddPage")}
            >
              Add Your Dog
            </button>
          </div>

          <div className="mb-2">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Breed</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dogsList.map((n) => (
                  <tr key={n.id}>
                    <td>{n.name}</td>
                    <td>{n.age}</td>
                    <td>{n.breed}</td>
                    <td>
                      <div className="">
                        <button
                          key={n.id}
                          className="btn btn-primary mb-1"
                          onClick={() => editBtn(n.id)}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <button
                          className="btn btn-primary"
                          onClick={() => removeBtn(n.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-grid mt-5">
            <button className="btn btn-primary" onClick={signOut}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogs;

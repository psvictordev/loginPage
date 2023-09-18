import React, { useState } from "react";

const Alert = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return visible ? (
    <div className="alert alert-success text-center">
      <p>Dogs List Update</p>
      <button onClick={handleClose}>OK</button>
    </div>
  ) : null;
};

export default Alert;

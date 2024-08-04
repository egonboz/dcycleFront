import React, { useRef, useState } from "react";
import "../../css/exercise1/NameForm.css";

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const popoverRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z]*$/;

    if (regex.test(value)) {
      setName(value);
      setError("");
      hidePopover();
    } else {
      setName(value);
      setError("Por favor introduzca el nombre sin signos de puntuación");
      showPopover();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError("El nombre no puede estar vacío.");
      showPopover();
    } else if (error === "") {
      onSubmit(name);
    }
  };

  const showPopover = () => {
    if (popoverRef.current) {
      popoverRef.current.classList.add("visible");
    }
  };

  const hidePopover = () => {
    if (popoverRef.current) {
      popoverRef.current.classList.remove("visible");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ position: "relative" }}>
      <input
        className="inputField"
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Introduce tu nombre"
      />
      <button className="formButton" type="submit">
        Enviar
      </button>
      <div ref={popoverRef} className="popover">
        {error}
      </div>
    </form>
  );
};

export default NameForm;

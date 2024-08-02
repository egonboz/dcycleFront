import React, { useState } from "react";

const NameForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z]*$/;

    if (regex.test(value)) {
      setName(value);
      setError("");
    } else {
      setError("Solo se permiten letras.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError("El nombre no puede estar vacío.");
    } else if (error === "") {
      onSubmit(name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Introduce tu nombre"
      />
      <button type="submit">Enviar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default NameForm;

import React, { useState } from "react";
import { validateEmail, validateName } from "../../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      if (!inputValue.length) {
        setErrorMessage("Name cannot be blank");
      } else {
        setErrorMessage("");
      }
      setName(inputValue);
    } else if (inputType === "email") {
      if (!validateEmail(inputValue)) {
        setErrorMessage("Email invalid");
      } else {
        setErrorMessage("");
      }
      setEmail(inputValue);
    } else if (inputType === "message") {
      if (!inputValue.length) {
        setErrorMessage("Message cannot be blank");
      } else {
        setErrorMessage("");
      }
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !validateName(name)) {
      setErrorMessage("Email or name is not valid");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col items-center mt-36  space-y-4 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl text-secondary font-extrabold">Contact Me</h1>
        <div className="card border shadow-xl">
          <label className="text-center text-xl text-neutral bg-accent rounded-t-2xl font-extrabold">
            Name
          </label>
          <input
            className="input-md text-black rounded-b-2xl"
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="card border shadow-xl">
          <label className="text-center text-xl text-neutral bg-accent rounded-t-2xl font-extrabold">
            Email
          </label>
          <input
            className="input-md text-black rounded-b-2xl"
            required
            type="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="card border shadow-xl">
          <label className="text-center text-xl text-neutral bg-accent rounded-t-2xl font-extrabold">
            Message
          </label>
          <textarea
            placeholder="message"
            className="textarea-md text-black rounded-b-2xl"
            name="message"
            id="message"
            value={message}
            onChange={handleInputChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          className="btn btn-lg bg-secondary text-neutral mt-5 shadow-xl"
          type="button"
          onClick={() => {}}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="text-black text-center text-2xl">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

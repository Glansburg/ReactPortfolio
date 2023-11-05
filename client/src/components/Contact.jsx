import { useState } from "react";
import { validateEmail } from "../utils/helpers";

 function Contact() {
    const recipientEmail = "joelgetzke@outlook.com";
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
      if (!inputValue) {
        setErrorMessage("Email is required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "userName") {
      setUserName(inputValue);
      if (!inputValue) {
        setErrorMessage("Name is required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "message") {
      setMessage(inputValue);
      if (!inputValue) {
        setErrorMessage("Message is required");
      } else {
        setErrorMessage("");
      }
    } else {
      setErrorMessage(`Unkown Input ${inputValue}`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      setErrorMessage("Name is required");
      return;
    } else if (!validateEmail(email) && !email) {
      setErrorMessage("Email is required");
      return;
    } else if (!message) {
      setErrorMessage("Message is required");
      return;
    }

    setUserName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    alert(
      `Thanks ${userName} for contacting me, I will get back to you as soon as I can!`
    );
  };

  return (
    <>
      <div className="">
        <h2 className="text-center mt-4 custom-height ">Contact Me</h2>
      </div>
      <div className="">
        <form className=" custom-margin-2" onSubmit={handleFormSubmit}>
        <label className="pb-1" for="exampleFormControlInput1" class="form-label">Name:</label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            class="form-control"
            id="exampleFormControlInput1"
          />
        <label className="pb-2 pt-2" for="exampleFormControlInput1" class="form-label">Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
          <label className=" pb-2 pt-2" for="exampleFormControlTextarea1" class="form-label">Message:</label>
          <textarea
            rows={6}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            class="form-control"
            id="exampleFormControlTextarea1"
          />
          
          <a href={`mailto:${recipientEmail}`}>
          <button type="button" class="btn btn-outline-primary btn-lg mt-4">Submit</button>
          </a>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;


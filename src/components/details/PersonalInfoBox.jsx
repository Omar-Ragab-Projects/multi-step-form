import { useRef, useState } from "react";
import SubmitBtn from "../../ui/SubmitBtn";
import Header from "./Header";

export default function PersonalInfoBox({ show, setActiveStep, setValidate }) {
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [phoneRequired, setPhoneRequired] = useState(false);
  const nameInput = useRef("");
  const emailInput = useRef("");
  const phoneInput = useRef("");

  function moveStepHandler() {
    nameInput.current.length <= 0
      ? setNameRequired(true)
      : setNameRequired(false);
    emailInput.current.length <= 0 || !emailInput.current.match(/@/)
      ? setEmailRequired(true)
      : setEmailRequired(false);
    phoneInput.current.length <= 0
      ? setPhoneRequired(true)
      : setPhoneRequired(false);

    if (
      nameInput.current.length > 0 &&
      emailInput.current.length > 0 &&
      phoneInput.current.length > 0 &&
      emailInput.current.match(/@/)
    ) {
      setActiveStep(2);
      setValidate(true);
    } else {
      setValidate(false);
    }
  }
  return (
    <section
      className="personal-info w-full h-full relative"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <Header
        title="Personal info"
        content="Please provide your name, email address, and phone number."
      />
      <div className="section-content ">
        <div className="name relative">
          <label htmlFor="name" className="text-marineBlue font-[500] ">
            Name
          </label>

          <input
            onChange={(e) => (nameInput.current = e.target.value)}
            type="text"
            id="name"
            placeholder="e.g. Omar Ragab"
            className={`block px-2 py-3 mb-6 border mt-1 border-coolGray rounded-lg w-full focus:outline-none ${
              nameRequired && "border-strawberryRed"
            }`}
          />
          <span
            className={`absolute top-0 right-0 text-strawberryRed hidden ${
              nameRequired && "!block"
            }`}
          >
            Name is required
          </span>
        </div>
        <div className="email relative">
          <label htmlFor="email" className="text-marineBlue font-[500] ">
            Email Address
          </label>
          <input
            onChange={(e) => (emailInput.current = e.target.value)}
            type="email"
            id="email"
            placeholder="e.g. omarragab@lorem.com"
            className={`block px-2 py-3 mb-6 border mt-1 border-coolGray rounded-lg w-full focus:outline-none ${
              emailRequired && "border-strawberryRed"
            }`}
          />
          <span
            className={`absolute top-0 right-0 text-strawberryRed hidden ${
              emailRequired && "!block"
            }`}
          >
            Email is required
          </span>
        </div>
        <div className="phone relative">
          <label htmlFor="phone" className="text-marineBlue font-[500] ">
            Phone Number
          </label>
          <input
            onChange={(e) => (phoneInput.current = e.target.value)}
            type="text"
            id="phone"
            placeholder="e.g. +20 1234 567 890 "
            className={`block px-2 py-3 border mt-1 border-coolGray rounded-lg w-full focus:outline-none ${
              phoneRequired && "border-strawberryRed"
            }`}
          />
          <span
            className={`absolute top-0 right-0 text-strawberryRed hidden ${
              phoneRequired && "!block"
            }`}
          >
            Phone is required
          </span>
        </div>
      </div>
      <SubmitBtn onClick={moveStepHandler} />
    </section>
  );
}

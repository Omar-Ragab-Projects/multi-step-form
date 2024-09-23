import Header from "./Header";
import SubmitBtn from "./../../ui/SubmitBtn";
import { useState } from "react";
export default function SelectPlanBox({
  show,
  setActiveStep,
  plans,
  selectedPlan,
  setSelectedPlan,
  checked,
  setChecked,
}) {
  // checked ? monthly : yearly
  return (
    <section
      className="personal-info w-full h-full relative"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <Header
        title="Select your plan"
        content="Your have the option for monthly or yearly billing."
      />
      <div className="section-content">
        <div className="plans flex gap-4">
          {plans &&
            // eslint-disable-next-line react/prop-types
            plans.map((plan, index) => (
              <>
                <label
                  key={index}
                  htmlFor={plan.name}
                  className={`cursor-pointer plan-box  flex-1 px-3 py-4 border border-lightGray rounded-lg ${
                    plan.name === selectedPlan &&
                    "border-purplishBlue bg-magnolia"
                  }`}
                >
                  <img src={plan.src} alt="plan photo" className="mb-12" />
                  <h3 className="font-[700] text-marineBlue">{plan.name}</h3>
                  <span className="text-coolGray">${plan.price}/mo</span>
                  <span
                    className={`hidden text-purplishBlue mt-1 ${
                      !checked && "!block"
                    }`}
                  >
                    2 months free
                  </span>
                </label>
                <input
                  type="radio"
                  id={plan.name}
                  name="plans"
                  hidden
                  onChange={(e) => setSelectedPlan(e.target.id)}
                />
              </>
            ))}
        </div>
        <div className="due-payment bg-magnolia my-10 py-4 rounded-lg text-center flex items-center justify-center gap-6 ">
          <span
            className={`text-coolGray font-bold ${
              checked && "text-marineBlue"
            }`}
          >
            Monthly
          </span>

          <label className="cursor-pointer" htmlFor="checkbox">
            <div className="w-12 h-6 bg-marineBlue rounded-full relative">
              <span
                className={`absolute  p-2 bg-White rounded-full ${
                  checked ? "left-1 top-1" : "right-1 top-1"
                }`}
              ></span>
            </div>
          </label>
          <input
            type="checkbox"
            className=""
            id="checkbox"
            onChange={() => setChecked(!checked)}
            hidden
          />

          <span
            className={`text-coolGray font-bold ${
              !checked && "text-marineBlue"
            }`}
          >
            Yearly
          </span>
        </div>
        <button
          className="absolute bottom-0 text-coolGray text-md"
          onClick={() => setActiveStep(1)}
        >
          Go Back
        </button>
        <SubmitBtn onClick={() => setActiveStep(3)} />
      </div>
    </section>
  );
}

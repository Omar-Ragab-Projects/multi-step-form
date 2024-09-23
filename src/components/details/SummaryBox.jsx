import { useEffect, useState } from "react";
import Header from "./Header";
import SubmitBtn from "../../ui/SubmitBtn";

export default function SummaryBox({
  show,
  setActiveStep,
  selectedPlan,
  monthly,
  plans,
  addOnsSelected,
  addOns,
  validate,
}) {
  const [activeAddOns, setActiveAddOns] = useState([]);
  const [activePlan, setActivePlan] = useState({});
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    function getActiveAddOns() {
      const filteredArr = addOns.filter((add) =>
        addOnsSelected.includes(add.name)
      );
      setActiveAddOns(() => filteredArr);
      // Get Price For Add Ons
      if (filteredArr.length > 0) {
        const addOnsPrice = filteredArr
          .map((add) => add.price)
          .reduce((pre, curr) => pre + curr);
        setTotalPrice(() => addOnsPrice);
      } else {
        setTotalPrice(0);
      }
    }
    function getActivePlan() {
      const getPlan = plans.find((plan) => plan.name === selectedPlan);
      setActivePlan(getPlan);
      // Get Price For Plan
      setTotalPrice((a) => a + getPlan.price);
    }

    getActiveAddOns();
    getActivePlan();
  }, [addOnsSelected, selectedPlan]);

  return (
    <section
      className="personal-info w-full h-full relative"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <Header
        title="Finishing up"
        content="Double-check everything looks OK before confirming."
      />
      <div className="section-content">
        <div className="plan-add-ons-wrapper bg-magnolia p-6 rounded-lg">
          <div className="selected-plan flex justify-between items-center border-b border-b-lightGray pb-4">
            <div>
              <h3 className="font-bold text-marineBlue">
                {selectedPlan} ({monthly ? "Monthly" : "Yearly"})
              </h3>
              <span
                onClick={() => setActiveStep(2)}
                className="text-coolGray underline cursor-pointer"
              >
                Change
              </span>
            </div>
            <span className="font-bold text-marineBlue">
              $
              {monthly
                ? `${activePlan.price}/mo`
                : `${activePlan.price * 10}/yr`}
            </span>
          </div>
          <ul className="selected-add-ons">
            {activeAddOns &&
              activeAddOns.map((add, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between mt-3"
                >
                  <span className="text-coolGray">{add.name}</span>
                  <span className="text-marineBlue ">
                    +${monthly ? `${add.price}/mo` : `${add.price * 10}/yr`}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className="total flex items-center justify-between p-6">
          <span className="text-coolGray">
            Total (per {monthly ? "month" : "year"})
          </span>
          <span className="text-purplishBlue font-bold text-xl">
            ${monthly ? `${totalPrice}/mo` : `${totalPrice * 10}/yr`}
          </span>
        </div>
        <button
          className="absolute bottom-0 text-coolGray text-md"
          onClick={() => setActiveStep(3)}
        >
          Go Back
        </button>
        <SubmitBtn
          title={"Confirm"}
          onClick={() => (validate ? setActiveStep(5) : setActiveStep(1))}
        />
      </div>
    </section>
  );
}

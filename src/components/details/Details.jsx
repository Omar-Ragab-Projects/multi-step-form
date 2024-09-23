import PersonalInfoBox from "./PersonalInfoBox";
import SelectPlanBox from "./SelectPlanBox";
import AddOnsBox from "./AddOnsBox";
import SummaryBox from "./SummaryBox";
import { useContext, useState } from "react";
import { ActiveStepContext } from "../../App";
import { plans } from "./../../data/plans";
import { addOns } from "./../../data/add-ons";
import ThankYou from "./ThankYou";

export default function Details() {
  const [activeStep, setActiveStep] = useContext(ActiveStepContext);
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  // checked ? monthly : yearly
  const [checked, setChecked] = useState(true);
  const [addOnsSelected, setAddOnsSelected] = useState([]);
  const [validate, setValidate] = useState(true);
  return (
    <div className="details-wrapper  lg:flex-[4]  px-24 pt-8 max-lg:p-4 pb-4 w-full h-full">
      <PersonalInfoBox
        show={activeStep == 1}
        setActiveStep={setActiveStep}
        setValidate={setValidate}
      />
      <SelectPlanBox
        show={activeStep == 2}
        setActiveStep={setActiveStep}
        plans={plans}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        checked={checked}
        setChecked={setChecked}
      />
      <AddOnsBox
        show={activeStep == 3}
        setActiveStep={setActiveStep}
        addOns={addOns}
        addOnsSelected={addOnsSelected}
        setAddOnsSelected={setAddOnsSelected}
        checked={checked}
      />
      <SummaryBox
        show={activeStep == 4}
        setActiveStep={setActiveStep}
        selectedPlan={selectedPlan}
        monthly={checked}
        plans={plans}
        addOnsSelected={addOnsSelected}
        addOns={addOns}
        validate={validate}
      />
      <ThankYou show={activeStep == 5} />
    </div>
  );
}

import { steps } from "../../data/steps";
import styles from "./navBar.module.css";
export default function NavBar({ activeStep, setActiveStep }) {
  return (
    <nav className={`${styles.nav} rounded-xl pl-6 py-8 `}>
      <ul className="flex flex-col justify-center gap-5 text-sm max-lg:flex-row">
        {steps &&
          steps.map((step) => (
            <li
              onClick={() => setActiveStep(step.id)}
              key={step.id}
              className="flex max-lg:flex-col  items-center gap-4 cursor-pointer"
            >
              <div
                className={`step-number font-[500] border border-White text-White rounded-full w-[35px] h-[35px] flex-center  ${
                  activeStep === step.id &&
                  "bg-lightBlue text-marineBlue border-none"
                }`}
              >
                {step.id}
              </div>
              <div className="step-info max-lg:hidden">
                <span className="text-coolGray text-xs">{step.step}</span>
                <h3 className={`text-White tracking-widest `}>{step.name}</h3>
              </div>
            </li>
          ))}
      </ul>
    </nav>
  );
}

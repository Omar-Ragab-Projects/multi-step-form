import { createContext, useState } from "react";
import Details from "./components/details/Details";
import NavBar from "./components/navBar/NavBar";

export const ActiveStepContext = createContext(null);

function App() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="app w-lvw h-lvh bg-magnolia flex-center text-sm ">
      <div className="form rounded-xl bg-White p-4 flex lg:flex-row flex-col w-[70%] max-lg:w-[90%] max-w-[1000px] h-[600px]">
        <NavBar activeStep={activeStep} setActiveStep={setActiveStep} />
        <ActiveStepContext.Provider value={[activeStep, setActiveStep]}>
          <Details />
        </ActiveStepContext.Provider>
      </div>
    </div>
  );
}

export default App;

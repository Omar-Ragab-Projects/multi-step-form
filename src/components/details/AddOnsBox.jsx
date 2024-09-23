import SubmitBtn from "../../ui/SubmitBtn";
import Header from "./Header";

export default function AddOnsBox({
  show,
  setActiveStep,
  addOns,
  addOnsSelected,
  setAddOnsSelected,
  checked,
}) {
  function selectedAddOns(e) {
    if (e.target.checked) {
      setAddOnsSelected((a) => [...a, e.target.id]);
    } else {
      setAddOnsSelected((a) => a.filter((a) => a !== e.target.id));
    }
  }

  return (
    <section
      className="personal-info w-full h-full relative"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <Header
        title="Pick add-ons"
        content="Add-ons help enhance your gaming experience."
      />
      <div className="section-content ">
        <div className="add-ons-wrapper">
          {addOns &&
            // eslint-disable-next-line react/prop-types
            addOns.map((add, index) => (
              <label
                htmlFor={add.name}
                key={index}
                className={`flex justify-between items-center mb-4 p-4 border border-lightGray rounded-lg ${
                  addOnsSelected.includes(add.name) &&
                  "bg-magnolia border-purplishBlue"
                }`}
              >
                <input
                  type="checkbox"
                  id={add.name}
                  className="w-4 h-4 "
                  onChange={(e) => selectedAddOns(e)}
                />
                <div className="info flex-[6] pl-8">
                  <h3 className="text-marineBlue font-bold ">{add.name}</h3>
                  <p className="text-coolGray ">{add.content}</p>
                </div>
                <div className="price flex-1 text-purplishBlue">
                  {checked ? `+${add.price}/mo` : `+${add.price * 10}/yr`}
                </div>
              </label>
            ))}
        </div>
        <button
          className="absolute bottom-0 text-coolGray text-md"
          onClick={() => setActiveStep(2)}
        >
          Go Back
        </button>
        <SubmitBtn onClick={() => setActiveStep(4)} />
      </div>
    </section>
  );
}

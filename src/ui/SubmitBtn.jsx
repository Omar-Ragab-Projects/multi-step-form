export default function SubmitBtn({ onClick, title }) {
  return (
    <button
      onClick={onClick}
      className={`text-[500] text-White bg-marineBlue/95 transition-all px-6 py-3 rounded-lg  absolute bottom-0 right-0  hover:bg-marineBlue ${
        title == "Confirm" && "bg-purplishBlue/95 hover:bg-purplishBlue"
      }`}
    >
      {title ? title : "Next Step"}
    </button>
  );
}

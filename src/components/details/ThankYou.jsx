export default function ThankYou({ show }) {
  return (
    <section
      className="w-full h-full "
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div className="flex items-center justify-center w-full h-full flex-col ">
        <img src="/images/icon-thank-you.svg" alt="thank you" />
        <h2 className="text-marineBlue text-4xl font-bold mt-8 mb-4">
          Thank you!
        </h2>
        <p className="text-center text-coolGray leading-6">
          Thank you! Thanks for confirming your subscription! We hope you have
          fun using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}

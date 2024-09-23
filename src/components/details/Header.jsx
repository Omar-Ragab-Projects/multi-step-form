export default function Header({ title, content }) {
  return (
    <div className="section-header mb-8">
      <h2 className="text-4xl font-[500] text-marineBlue mb-2 ">{title}</h2>
      <p className="text-coolGray ">{content}</p>
    </div>
  );
}

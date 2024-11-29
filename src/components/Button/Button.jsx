import "./Button.css";
export default function Button({ children, buttonClick }) {
  return (
    <button
      className="button active{
"
      onClick={buttonClick}
    >
      {children}
    </button>
  );
}

import "./Button.css";
export default function Button({ children, buttonClick, isActive }) {
  return (
    <button
      className={isActive ? "button active" : "button"}
      onClick={buttonClick}
    >
      {children}
    </button>
  );
}

import './button.css';
const Button = ({ text, color, children }) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
};

export default Button;

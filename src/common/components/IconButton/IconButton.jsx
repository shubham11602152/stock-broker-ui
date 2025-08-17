const IconButton = ({
  onMouseDown,
  onTouchStart,
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      className={`bg-gray-800 text-white rounded-full shadow-lg ${className}`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;

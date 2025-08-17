import { useEffect, useRef, useState } from "react";
import IconButton from "../../../../common/components/IconButton";
import { Plus, TrendingDown, TrendingUp } from "lucide-react";

// Draggable Floating Action Button
const FloatingActionButton = ({ onAction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({
    x: 20,
    y: window.innerHeight - 100,
  });
  const [isDragging, setIsDragging] = useState(false);
  const fabRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.stopPropagation();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - 25;
      const newY = e.clientY - 25;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    e.stopPropagation();
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const newX = e.touches[0].clientX - 25;
      const newY = e.touches[0].clientY - 25;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  const handleMainClick = (e) => {
    if (!isDragging) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleActionClick = (type) => {
    onAction(type);
    setIsExpanded(false);
  };

  return (
    <div
      ref={fabRef}
      className="fixed z-50"
      style={{ left: position.x, top: position.y }}
    >
      {isExpanded && (
        <div className="flex flex-col items-center space-y-4 mb-4">
          <IconButton
            className="bg-red-500 text-white p-3 transition-transform transform hover:scale-110"
            onClick={() => handleActionClick("sell")}
          >
            <TrendingDown size={24} />
          </IconButton>
          <IconButton
            className="bg-green-500 text-white p-3 transition-transform transform hover:scale-110"
            onClick={() => handleActionClick("buy")}
          >
            <TrendingUp size={24} />
          </IconButton>
        </div>
      )}
      <IconButton
        className="bg-gray-800 text-white p-4 transition-transform transform hover:rotate-45"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleMainClick}
      >
        <Plus size={24} />
      </IconButton>
    </div>
  );
};

export default FloatingActionButton;

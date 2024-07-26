import React, { useEffect } from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
  timeout?: number;
}

const Alert: React.FC<AlertProps> = ({
  message,
  type = "info",
  onClose,
  timeout = 3000,
}) => {
  const baseStyle = "p-4 rounded-md text-white mb-4";
  const typeStyles = {
    success: "bg-purple-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, onClose]);

  return (
    <div className={`${baseStyle} ${typeStyles[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-lg font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Alert;

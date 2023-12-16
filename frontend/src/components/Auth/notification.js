import React, { useState, useEffect } from "react";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000); // Close notification after 3 seconds

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
      {message}
    </div>
  );
};

export default Notification;

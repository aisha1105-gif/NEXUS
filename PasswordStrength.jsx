import React, { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  const getStrength = () => {
    if (password.length > 8) return "Strong";
    if (password.length > 4) return "Medium";
    return "Weak";
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Strength: {getStrength()}</p>
    </div>
  );
};

export default PasswordStrength;

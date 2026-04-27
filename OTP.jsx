import React, { useState } from "react";

const OTP = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp === "1234") alert("Verified!");
    else alert("Invalid OTP");
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <input
        type="text"
        maxLength="4"
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
};

export default OTP;

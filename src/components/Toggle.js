import React, { useState } from "react";

const Toggle = ({ children }) => {
  const [faqStatus, setFaqStatus] = useState(false);
  return (
    <div onClick={() => setFaqStatus(!faqStatus)}>
      {faqStatus ? children : ""}
    </div>
  );
};

export default Toggle;

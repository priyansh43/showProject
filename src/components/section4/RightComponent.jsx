import React from "react";
import QaSection from "../QASection/QaSection";

const RightComponent = ({ FAQ, mobile }) => {
  const faqData = typeof FAQ === "function" ? FAQ() : FAQ;

  return (
    <div className="">
      <QaSection FAQ={faqData} mobile={mobile} readMore={false} />
    </div>
  );
};

export default RightComponent;

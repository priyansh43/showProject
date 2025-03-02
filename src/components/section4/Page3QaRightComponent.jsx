import React from "react";
import Page2QaSection from "../QASection/Page2QaSection";
import { Page2MobileFAQ } from "../../data/SecondPage";

const Page3QaRightComponent = () => {
  return (
    <div className="">
      <Page2QaSection data={Page2MobileFAQ} mobile={true} />
    </div>
  );
};

export default Page3QaRightComponent;

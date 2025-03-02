import React from "react";
import Page2QaSection from "../QASection/Page2QaSection";
import { Page2MobileFAQ } from "../../data/SecondPage";

const Page2QaRightComponent = () => {
  return (
    <div className="">
      <Page2QaSection data={Page2MobileFAQ} mobile={true} />
    </div>
  );
};

export default Page2QaRightComponent;

import React, { useState } from "react";
import { PinkButtonTop } from "./PinkButtonTop";
import MobileProgramMenu from "../header/MobileProgramMenu";

const StickyButton = ({menuOpen}) => {
  const [openProgramMenu, setOpenProgramMenu] = useState(false);

  return (
    <div>
      {/* Render the fixed button only when the menu is not open */}
      {!openProgramMenu && !menuOpen && (
        <div className="md:hidden visible w-[100vw] fixed left-0 z-40 md:mt-0">
          <PinkButtonTop
            title={"Choose Your Program"}
            onClick={() => setOpenProgramMenu(true)}
          />
        </div>
      )}
      {/* Render the mobile program menu */}
      {openProgramMenu && (
        <MobileProgramMenu
          openProgramMenu={openProgramMenu}
          setOpenProgramMenu={setOpenProgramMenu}
        />
      )}
    </div>
  );
};

export default StickyButton;

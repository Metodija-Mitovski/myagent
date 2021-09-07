import { useEffect, useState } from "react";

import { ToTop, ArrowUp } from "./ScrollElements";
import { animateScroll as scroll } from "react-scroll";

export const ScrollToTop = () => {
  const [YOffset, setYOffset] = useState(0);

  function handleScroll() {
    setYOffset(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [YOffset]);

  return (
    <ToTop
      className={YOffset >= 100 ? "active" : ""}
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <ArrowUp />
    </ToTop>
  );
};

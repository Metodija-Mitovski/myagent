import {
  SectionMain,
  SectionMainWrapper,
  OverlayDarken,
  HeadingMain,
} from "./QuerySectionElements";

/// components
import QueryUtils from "./QueryUtils";

const QuerySection = () => {
  return (
    <SectionMain>
      <SectionMainWrapper>
        <OverlayDarken>
          <HeadingMain>
            Пронајди го местото од соништата со наша помош
          </HeadingMain>
          <QueryUtils></QueryUtils>
        </OverlayDarken>
      </SectionMainWrapper>
    </SectionMain>
  );
};

export default QuerySection;

import {
  SectionMain,
  SectionMainWrapper,
  OverlayDarken,
  HeadingMain,
} from "./QuerySectionElements";

/// components
import QueryData from "./QueryData";

const QuerySection = () => {
  return (
    <SectionMain>
      <SectionMainWrapper>
        <OverlayDarken>
          <HeadingMain>
            Пронајди го местото од соништата со наша помош
          </HeadingMain>
          <QueryData search={false}></QueryData>
        </OverlayDarken>
      </SectionMainWrapper>
    </SectionMain>
  );
};

export default QuerySection;

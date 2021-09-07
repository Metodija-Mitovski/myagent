import { useSelector } from "react-redux";
import { InfoWrapper } from "./DashInfoElements";

const DashInfo = () => {
  const user = useSelector((state) => state.user);

  return (
    <InfoWrapper>
      <p>
        Здраво {user.firstName} {user.lastName}
      </p>
      <p>
        Од контролната табла на вашиот профил може да ги видите и ажурирате
        вашите постови, <br /> исто така може да го ажурирате вашиот пасворд и
        деталите за вашиот профил.
      </p>
    </InfoWrapper>
  );
};

export default DashInfo;

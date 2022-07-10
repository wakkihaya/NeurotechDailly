import { useMediaQuery } from "react-responsive";
import { HomeDesktop, HomeMobile } from "../components/Home";

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return <>{isTabletOrMobile ? <HomeMobile /> : <HomeDesktop />}</>;
};

export default App;

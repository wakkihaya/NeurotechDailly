import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { HomeDesktop, HomeMobile } from "../components/Home";

const App = () => {
  const [mounted, setMounted] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  if (isTabletOrMobile) {
    return <HomeMobile />;
  }
  return <HomeDesktop />;
};

export default App;

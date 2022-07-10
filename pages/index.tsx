import Head from "next/head";

import { useMediaQuery } from "react-responsive";
import { HomeDesktop, HomeMobile } from "../components/Home";

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Antonio:regular,bold"
          rel="stylesheet"
        />
      </Head>
      {isTabletOrMobile ? <HomeMobile /> : <HomeDesktop />}
    </>
  );
};

export default App;

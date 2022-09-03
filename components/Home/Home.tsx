import type { FC } from "react";

import { AboutUs } from "../AboutUs";
import { CTA } from "../CTA";

const Home: FC = () => {
  return (
    <>
      <div className="home">
        <div className="header" />
        <div className="container">
          <div className="container__left">
            <div className="container__cover container__cover--title">
              <div className="container__title">
                <div className="container__title__name">
                  Neurotech <br /> Daily
                </div>
                <div className="container__title__podcast-btn">
                  <a
                    href="https://spotifyanchor-web.app.link/e/lhkeYnwx0sb"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Listen on Podcast
                  </a>
                </div>
              </div>
            </div>
            <div className="container__cover container__cover--cta">
              <CTA />
            </div>
          </div>
          <div className="container__right">
            <div className="container__cover container__cover--description">
              <div className="container__description">
                Stay up-to-date <br /> with the latest neurotech. <br />{" "}
                neuroscience x technology
              </div>
            </div>
            <div className="container__cover">
              <img className="container__image" src="brain.png" alt="brain" />
            </div>
            <div className="container__cover container__cover--about-us">
              <AboutUs />
            </div>
          </div>
        </div>
        <div className="footer" />
      </div>
    </>
  );
};

export default Home;

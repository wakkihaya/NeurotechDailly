import type { FC } from "react";
import { AboutUs } from "../AboutUs";
import { CTA } from "../CTA";

const HomeMobile: FC = () => {
  return (
    <div className="home-mobile">
      <div className="home-mobile__container">
        <div className="home-mobile__top">
          <div className="home-mobile__title">
            <div className="home-mobile__title__name">
              Neurotech <br /> Daily
            </div>
            <div className="home-mobile__title__podcast-btn">
              <a
                href="https://spotifyanchor-web.app.link/e/lhkeYnwx0sb"
                target={"_blank"}
                rel="noreferrer"
              >
                Listen on Podcast
              </a>
            </div>
          </div>
          <CTA />
        </div>
        <div className="divider" />
        <div className="home-mobile__description">
          Stay up-to-date with the latest neurotech. <br /> neuroscience x
          technology
        </div>
        <div className="home-mobile__about-us">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default HomeMobile;

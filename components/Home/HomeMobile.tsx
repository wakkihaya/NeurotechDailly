import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";
import { AboutUs } from "../AboutUs";

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
              Listen on Podcast
            </div>
          </div>
          <div className="home-mobile__cta">
            <div className="home-mobile__cta__item">
              Apple Podcast{" "}
              <FontAwesomeIcon
                className="home-mobile__cta__item__icon"
                icon={faArrowUpRightFromSquare}
              />
            </div>
            <div className="home-mobile__cta__item">
              Google Podcast{" "}
              <FontAwesomeIcon
                className="home-mobile__cta__item__icon"
                icon={faArrowUpRightFromSquare}
              />
            </div>
            <div className="home-mobile__cta__item">
              Spotify{" "}
              <FontAwesomeIcon
                className="home-mobile__cta__item__icon"
                icon={faArrowUpRightFromSquare}
              />
            </div>
          </div>
        </div>
        <hr className="rounded" />
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";
import { AboutUs } from "../AboutUs";

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
                  Listen on Podcast
                </div>
              </div>
            </div>
            <div className="container__cover container__cover--cta">
              <div className="container__cta">
                <div className="container__cta__item">
                  Apple Podcast{" "}
                  <FontAwesomeIcon
                    className="container__cta__item__icon"
                    icon={faArrowUpRightFromSquare}
                  />
                </div>
                <div className="container__cta__item">
                  Google Podcast{" "}
                  <FontAwesomeIcon
                    className="container__cta__item__icon"
                    icon={faArrowUpRightFromSquare}
                  />
                </div>
                <div className="container__cta__item">
                  Spotify{" "}
                  <FontAwesomeIcon
                    className="container__cta__item__icon"
                    icon={faArrowUpRightFromSquare}
                  />
                </div>
              </div>
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

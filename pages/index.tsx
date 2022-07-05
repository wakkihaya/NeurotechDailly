import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPager,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home">
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
            <div className="container__about-us">
              <div className="container__about-us__description">
                <div className="container__about-us__description__text">
                  Supported by{" "}
                  <img
                    className="container__about-us__description__logo"
                    src="logo.png"
                    alt="logo"
                  />
                </div>
                a neurotech interview media
              </div>
              <div className="container__about-us__sns">
                Follow us on{" "}
                <a
                  href="https://neurotechjp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faPager} />
                </a>
                <a
                  href="https://twitter.com/NeurotechJP_en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

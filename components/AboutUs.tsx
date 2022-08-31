import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPager } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import type { FC } from "react";

export const AboutUs: FC = () => {
  return (
    <div className="about-us">
      <div className="about-us__description">
        <div className="about-us__description__text">
          Supported by{" "}
          <img
            className="about-us__description__logo"
            src="logo.png"
            alt="logo"
          />
        </div>
        a neurotech interview media
      </div>
      <div className="about-us__sns">
        Follow us on{" "}
        <a href="https://neurotechjp.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPager} />
        </a>
        <a
          href="https://twitter.com/NeurotechDaily"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

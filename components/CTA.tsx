import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";

export const CTA: FC = () => {
  return (
    <div className="cta">
      <div className="cta__item">
        <a
          href="https://podcasts.apple.com/us/podcast/neurotech-daily/id1642505992"
          target="_blank"
          rel="noreferrer"
        >
          Apple Podcast{" "}
          <FontAwesomeIcon
            className="cta__item__icon"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
      <div className="cta__item">
        <a
          href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy85YWUzOTg5OC9wb2RjYXN0L3Jzcw"
          target="_blank"
          rel="noreferrer"
        >
          Google Podcast{" "}
          <FontAwesomeIcon
            className="cta__item__icon"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
      <div className="cta__item">
        <a
          href="https://open.spotify.com/show/0EERdbG9Rl9iPhIpzEUiSH"
          target="_blank"
          rel="noreferrer"
        >
          Spotify{" "}
          <FontAwesomeIcon
            className="cta__item__icon"
            icon={faArrowUpRightFromSquare}
          />
        </a>
      </div>
    </div>
  );
};

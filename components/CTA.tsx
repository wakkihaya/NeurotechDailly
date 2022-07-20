import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";

export const CTA: FC = () => {
  return (
    <div className="cta">
      <div className="cta__item">
        Apple Podcast{" "}
        <FontAwesomeIcon
          className="cta__item__icon"
          icon={faArrowUpRightFromSquare}
        />
      </div>
      <div className="cta__item">
        Google Podcast{" "}
        <FontAwesomeIcon
          className="cta__item__icon"
          icon={faArrowUpRightFromSquare}
        />
      </div>
      <div className="cta__item">
        Spotify{" "}
        <FontAwesomeIcon
          className="cta__item__icon"
          icon={faArrowUpRightFromSquare}
        />
      </div>
    </div>
  );
};

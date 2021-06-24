/* eslint-disable jsx-ally/anchor-is-valid */
import React, { useState } from "react";
import CMSLink from "../CMSLink";
import Arrow from "../graphics/Arrow";
import useStyles from "./css";

type Props = {
  className?: string;
};

const LetsTalk: React.FC<Props> = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const classes = useStyles({ isHovered });
  return (
    <div className={[className, classes.wrap].filter(Boolean).join(" ")}>
      <svg
        className={classes.graphic}
        width="539"
        height="537"
        viewBox="0 0 539 537"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={classes.path} d="M124.788 49.3979" />
        <path className={classes.path} d="M124.788 49.3979" />
        <path className={classes.path} d="M124.788 49.3979" />
        <path className={classes.path} d="M124.788 49.3979" />
      </svg>

      <CMSLink href="/contact" scroll={false}>
        <a
          className={classes.link}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Arrow color="antique" className={classes.arrow} />
          <h3 className={classes.heading}>Let&apos;s Talk</h3>
        </a>
      </CMSLink>
    </div>
  );
};

export default LetsTalk;

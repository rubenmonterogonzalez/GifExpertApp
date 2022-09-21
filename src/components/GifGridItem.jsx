import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({url, title}) => {
  return (
    <>
      <figure className="grid-item">
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;

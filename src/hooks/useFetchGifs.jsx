import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";
import PropTypes from "prop-types";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 1000);
    });
  }, [category]);

  return state;
};

useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired,
};

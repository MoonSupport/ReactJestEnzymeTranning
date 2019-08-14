import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getPostsAction } from "../../reducers/post/reducer";

const ShareButton = props => {
  const dispatch = useDispatch();

  const getPostsRequest = () => {
    dispatch(getPostsAction());
  };

  const { buttonText } = props;

  return (
    <div>
      <button onClick={getPostsRequest} data-test="buttonComponent">
        {buttonText}
      </button>
    </div>
  );
};

ShareButton.propTypes = {
  buttonTex: PropTypes.string
};

export default ShareButton;

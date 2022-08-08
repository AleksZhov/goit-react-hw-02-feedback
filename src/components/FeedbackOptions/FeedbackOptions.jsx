import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Fragment>
      {options.map(item => (
        <button key={item} type="button" onClick={() => onLeaveFeedback(item)}>
          {item}
        </button>
      ))}
    </Fragment>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;

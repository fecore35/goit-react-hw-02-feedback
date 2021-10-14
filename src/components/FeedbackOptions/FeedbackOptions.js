import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="flex">
      {options.map((btn) => {
        return (
          <button
            key={btn}
            type="button"
            data-feedback={btn}
            onClick={onLeaveFeedback}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;

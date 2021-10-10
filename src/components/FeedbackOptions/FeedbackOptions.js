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

export default FeedbackOptions;

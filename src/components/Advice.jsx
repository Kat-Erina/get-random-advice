import PropTypes from "prop-types";

const Advice = ({ randomAdvice, getAdvice }) => {
  let { id, advice } = randomAdvice;

  return (
    <article className="bg-Dark-Grayish-Blue mx-[16px]">
      <h3>{id}</h3>
      <p>{advice}</p>
      <button onClick={getAdvice}>get new Quote</button>
    </article>
  );
};

export default Advice;

Advice.propTypes = {
  randomAdvice: PropTypes.object,
  getAdvice: PropTypes.func,
};

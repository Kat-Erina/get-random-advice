import PropTypes from "prop-types";
import logo from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";

const Advice = ({ randomAdvice, getAdvice }) => {
  let { id, advice } = randomAdvice;

  return (
    <section className="flex flex-col">
      <section className="bg-Dark-Grayish-Blue mx-[16px] w-[343px] h-[315px] flex flex-col">
        <h3 className="mt-[40px] text-center font-bold text-xs text-neon-green mb-6 tracking-wide">
          Advice #{id}
        </h3>
        <p className="mx-6 text-text text-center text-xl h-[132px]">
          “{advice}“
        </p>
        <img className="mt-8" src={logo}></img>
      </section>
      <div className="w-full mt-[-28px] flex justify-center h-[64px]">
        <img
          src={dice}
          className="h-[60px] w-[60px]  rounded-full p-[12px] bg-neon-green"
          onClick={getAdvice}
        ></img>
      </div>
    </section>
  );
};

export default Advice;

Advice.propTypes = {
  randomAdvice: PropTypes.object,
  getAdvice: PropTypes.func,
};

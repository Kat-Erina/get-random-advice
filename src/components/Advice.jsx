import PropTypes from "prop-types";
import logo from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";

const Advice = ({ randomAdvice, getAdvice }) => {
  let { id, advice } = randomAdvice;

  return (
    <section className="flex flex-col px-6 ">
      <section className="bg-Dark-Grayish-Blue h-[315px] flex flex-col w-full">
        <h3 className="mt-10 text-center font-bold text-xs text-neon-green mb-6 tracking-wide ">
          Advice #{id}
        </h3>
        <p className=" text-text text-center text-xl h-[132px]  px-6">
          “{advice}“
        </p>
        <img className="mt-8  px-6" src={logo}></img>
      </section>
      <div className="w-full mt-[-28px] flex justify-center h-16 ">
        <img
          src={dice}
          className="h-14 w-14  rounded-full p-3 bg-neon-green hover:shadow-greenish"
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

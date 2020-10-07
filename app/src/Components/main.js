import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRates } from "../Actions/main";

function Main(props) {
  useEffect(() => {
    props.fetchRates();
  }, []);

  const objKeys = Object.keys(props.currency);

  return (
    <div>
      {objKeys.map((item) => {
        return (
          <h2 key={item}>
            {item} : {(props.currency[item] * props.rate).toFixed(2)}
          </h2>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    base: state.base,
    currency: state.currency,
    rate: state.rateMultiply,
  };
};

const mapDispatchToProps = { fetchRates };

export default connect(mapStateToProps, mapDispatchToProps)(Main);

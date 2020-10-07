import React from "react";
import { connect } from "react-redux";

function Main(props) {
  return (
    <div>
      {props.currency.map((item) => {
        return <h2>{`${item.name} : ${item.symbol} ${item.rate}`}</h2>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps, {})(Main);

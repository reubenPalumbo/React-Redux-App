import React, { useState } from "react";
import { connect } from "react-redux";
import { newRate } from "../Actions/main";

function MainForm(props) {
  const [input, setInput] = useState("");

  const changes = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={changes}
        placeholder="Input a Number"
      />
      <button
        onClick={() => {
          props.newRate(input);
        }}
      >
        Enter
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps, { newRate })(MainForm);

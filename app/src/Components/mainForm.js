import React, { useState } from "react";
import { connect } from "react-redux";

function MainForm(props) {
  const [input, setInput] = useState("");

  const changes = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          onChange={changes}
          placeholder="Input a Number"
        />
        <button onClick={() => {}}>Enter</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps, {})(MainForm);

import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button onClick={props.handleRemoveAll} className="button button--link">
          Remove All
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__message">Please Add An option to get started</p>
      )}
      {/* loops through the options array and in each case return some html element */}
      {props.options.map((option, index) => {
        // console.log(`${option} is in the ${props.option[option]} index`);
        return (
          <Option
            key={option}
            count={index + 1}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
      })}
    </div>
  );
};

export default Options;

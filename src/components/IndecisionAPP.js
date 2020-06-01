import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionAPP extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  //takes argument passed up form option
  handleDeleteOption = optionToRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        //this return false thus the filter method removes it from the array
        return optionToRemove !== option;
      })
    }));
  };

  handlePick = () => {
    const option = this.state.options;
    const random = Math.floor(Math.random() * option.length);

    this.setState(() => {
      return {
        selectedOption: option[random]
      };
    });
    // alert(option[random]);
  };

  handleAddOption = option => {
    if (this.state.options.indexOf(option) > -1) {
      return "This option already exist";
    } else if (!option) {
      return "Enter a valid option";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  removeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  componentDidMount() {
    try {
      console.log("fetching Data");
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("saving Data");
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {}

  render() {
    const title = "Indecision App";
    const subTitle = "put your life in the hand of a computer";
    return (
      <div>
        <Header title={title} subtitle={subTitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleRemoveAll={this.handleRemoveAll}
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOpt={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          removeModal={this.removeModal}
        />
      </div>
    );
  }
}

import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  /* not needed again because if es6 class properties */
  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.state = {
  //     error: undefined
  //   };
  // }

  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.add.value.trim(" ");

    //this passes option to the function and fetches the return value of the handleAddopt function
    const error = this.props.handleAddOpt(option);

    if (!error) {
      e.target.elements.add.value = "";
    }

    this.setState(() => ({ error }));
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="add" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

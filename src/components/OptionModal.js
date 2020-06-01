import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    //the two not operator converts whatever the sselected option value to a boolean so undefined becomes false and any other type becomes true

    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.removeModal}
      ariaHideApp={false}
      className="modal"
    >
      <h3 className="modal__title">Selected Option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="modal-c" onClick={props.removeModal}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionModal;

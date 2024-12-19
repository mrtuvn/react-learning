import React, { useReducer } from "react";
import { ModalContext } from "./modalContext";
import { modalReducer } from "./modalReducer";

const initialState = {
  modalView: null,
  data: undefined,
  message: undefined,
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (modalView, data) => {
    dispatch({ type: "OPEN_MODAL", view: modalView, payload: data });
  };

  const openAlert = (modalView, message) => {
    dispatch({ type: "OPEN_ALERT", view: modalView, payload: message });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <ModalContext
      value={{
        modalView: state.modalView,
        data: state.data,
        openModal,
        closeModal,
        message: state.message,
        openAlert,
      }}
    >
      {children}
    </ModalContext>
  );
};

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { actions } from "../../redux/reducers/dialog-reducer";
import Dialogs from "./index";
import withAuthRedirect from "../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(actions.sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

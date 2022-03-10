import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/reducers/dialog-reducer";
import Dialogs from "./index";
import withAuthRedirect from "../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

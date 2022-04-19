import { compose } from "redux";
import { connect } from "react-redux";
import { actions } from "../../redux/reducers/dialog-reducer";
import Dialogs from "./index";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { AppStateType } from "../../redux/redux-store";
import React from "react";

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { ...actions }),
  withAuthRedirect
)(Dialogs) as React.ComponentType;

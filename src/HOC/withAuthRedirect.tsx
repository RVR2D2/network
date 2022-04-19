import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

type MapPropsType = { isAuth: boolean };

function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType) {
  const RedirectComponent: React.FC<MapPropsType> = (props) => {
    let { isAuth, ...restProps } = props;
    if (!isAuth) return <Redirect to={"/login"} />;
    return <WrappedComponent {...(restProps as unknown as WCP)} />;
  };

  let ConnectedAuthRedirectComponent = connect<
    MapPropsType,
    {},
    WCP,
    AppStateType
  >(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;

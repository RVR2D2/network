import { actions } from "../../../redux/reducers/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    // @ts-ignore
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(actions.addPostCreator(newPostText));
    },
  };
};

// @ts-ignore
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;

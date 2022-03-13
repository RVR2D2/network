import React from "react";
import s from "./style.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <p className={s.statusMode} onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </p>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              type="text"
              value={this.props.status}
              onBlur={this.deActivateEditMode}
              autoFocus={true}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;

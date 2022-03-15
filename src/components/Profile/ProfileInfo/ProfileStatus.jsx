import React from "react";
import s from "./style.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateStatusThunk(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <p className={s.statusMode} onDoubleClick={this.activateEditMode}>
              {this.props.status || "Нет статуса"}
            </p>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              type="text"
              value={this.state.status}
              onBlur={this.deActivateEditMode}
              autoFocus={true}
              onChange={this.onStatusChange}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProfileStatus;

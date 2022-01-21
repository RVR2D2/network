import bg1 from "../../assets/bg1.jpeg";

const Content = () => {
  return (
    <div className="app-content">
      <div className="app-bg-img">
        <img src={bg1} alt="bg-img" />
      </div>
      <div className="app-content-body">
        <div className="app-avatarBlock">ava + description</div>
        <div className="app-post">
          my post
          <div className="app-newPost">New Post</div>
        </div>
      </div>
    </div>
  );
};

export default Content;

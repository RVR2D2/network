import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

const state = {
  posts: [{ id: 1, message: "hi", like: 1 }],
};

describe("should be correct new post", () => {
  it("should new post should be added ", () => {
    const action = addPostCreator("Testing-reducers");
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
  });

  it("should message of new post should be correct ", () => {
    const action = addPostCreator("Testing-reducers");
    const newState = profileReducer(state, action);
    expect(newState.posts[1].message).toBe("Testing-reducers");
  });
});

describe("should be deleted post", () => {
  it("should be after deleting length of messages should be decrement", () => {
    const action = deletePost(1);
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(0);
  });
});

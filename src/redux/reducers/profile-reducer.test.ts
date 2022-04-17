import profileReducer, { actions } from "./profile-reducer";

const state = {
  posts: [{ id: 1, message: "hi", like: 1 }],
  profile: null,
  status: "",
};

describe("should be correct new post", () => {
  it("should new post should be added ", () => {
    const action = actions.addPostCreator("Testing-reducers");
    const newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
  });

  it("should message of new post should be correct ", () => {
    const action = actions.addPostCreator("Testing-reducers");
    const newState = profileReducer(state, action);
    // @ts-ignore
    expect(newState.posts[1].message).toBe("Testing-reducers");
  });
});

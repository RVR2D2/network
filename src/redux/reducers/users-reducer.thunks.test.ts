import { actions, follow } from "./users-reducer";
import { usersApi } from "../../api/users-api";
import { ResponseType, ResultCodesEnum } from "../../api/api";

jest.mock("../../api/users-api");
const userApiMock = usersApi;

const result: ResponseType = {
  resultCode: ResultCodesEnum.Success,
  messages: [],
  data: {},
};

// @ts-ignore
userApiMock.follow.mockReturnValue(Promise.resolve(result));

test("", async () => {
  const thunk = follow(1);

  const dispatchMock = jest.fn();

  // @ts-ignore
  await thunk(dispatchMock);
  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(
    1,
    actions.toggleFollowingProgress(true, 3)
  );
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(3));
  expect(dispatchMock).toHaveBeenNthCalledWith(
    2,
    actions.toggleFollowingProgress(false, 3)
  );
});

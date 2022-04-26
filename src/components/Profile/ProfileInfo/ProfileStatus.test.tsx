//@ts-ignore
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com");
  });

  test("after creation <span> should be displayed", () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed", () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    expect(() => {
      // @ts-ignore
      // eslint-disable-next-line testing-library/await-async-query
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should contains correct status", () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });

  test("input should be displayed in editMode instead of span", () => {
    // @ts-ignore
    const component = create(<ProfileStatus status="it-kamasutra.com" />);
    const root = component.root;
    // eslint-disable-next-line testing-library/await-async-query
    let span = root.findByType("span");
    span.props.onDoubleClick();
    // eslint-disable-next-line testing-library/await-async-query
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-kamasutra.com");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});

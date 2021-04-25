import React from "react";
import renderer from "react-test-renderer";
import { View } from "./Nav";

it("renders correctly", () => {
  const loggedOut = renderer.create(<View />).toJSON();
  expect(loggedOut).toMatchSnapshot();
  const loggedIn = renderer
    .create(<View session={{ user: { name: "test" } }} />)
    .toJSON();
  expect(loggedIn).toMatchSnapshot();
});

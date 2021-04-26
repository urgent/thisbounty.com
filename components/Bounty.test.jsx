import React from "react";
import renderer from "react-test-renderer";
import Bounty from "./Bounty";

it("renders correctly", () => {
  const tree = renderer.create(<Bounty />).toJSON();
  expect(tree).toMatchSnapshot();
});

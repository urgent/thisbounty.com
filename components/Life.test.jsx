import React from "react";
import renderer from "react-test-renderer";
import Life from "./Life";

it("renders correctly", () => {
  const tree = renderer.create(<Life />).toJSON();
  expect(tree).toMatchSnapshot();
  const empty = renderer.create(<Life amount={0} />).toJSON();
  expect(empty).toMatchSnapshot();
  const start = renderer.create(<Life amount={3} />).toJSON();
  expect(start).toMatchSnapshot();
  const full = renderer.create(<Life amount={10} />).toJSON();
  expect(full).toMatchSnapshot();
});

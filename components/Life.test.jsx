import React from "react";
import renderer from "react-test-renderer";
import Life from "./Life";

it("renders correctly", () => {
  const tree = renderer.create(<Life damage={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
  const empty = renderer.create(<Life damage={[1, 2, 3]} />).toJSON();
  expect(empty).toMatchSnapshot();
  const start = renderer.create(<Life damage={[]} level={4} />).toJSON();
  expect(start).toMatchSnapshot();
  const full = renderer.create(<Life damage={[]} level={7} />).toJSON();
  expect(full).toMatchSnapshot();
});

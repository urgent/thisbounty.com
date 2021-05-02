import React from "react";
import renderer from "react-test-renderer";
import Back from "./Back";

it("renders correctly", () => {
  const tree = renderer
    .create(<Back href={"/bounty/work"} title="Back" id="work" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

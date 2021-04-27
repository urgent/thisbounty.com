import React from "react";
import renderer from "react-test-renderer";
import { fork } from "./Fork";

it("fork to be truthy", async () => {
  const res = await fork();
  expect(res).toBeTruthy();
});

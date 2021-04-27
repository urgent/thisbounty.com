import React from "react";
import { Grid, Image, Text, Box } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";

export async function fork() {
  const res = await fetch("https://api.github.com/repos/");
  return res;
}

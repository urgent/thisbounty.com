import React from "react";
import { Grid, Image, Text, Box } from "@chakra-ui/react";
import fetch from "isomorphic-fetch";

export async function fork(token) {
  const res = await fetch(
    "https://api.github.com/repos/urgent/thisbounty.com/forks",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${token}`,
      },
    }
  );
  return res;
}

import React from "react";
import fetch from "isomorphic-fetch";
import { Icon } from "@chakra-ui/react";
import { AiOutlineFork } from "react-icons/ai";

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

export default function Fork() {
  return (
    <Icon
      data-cy={`fork`}
      as={AiOutlineFork}
      color="white"
      w={6}
      h={6}
      my={2}
      sx={{ cursor: "pointer" }}
      onClick={() => alert("fork")}
    />
  );
}

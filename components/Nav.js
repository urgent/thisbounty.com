import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Grid, Text, Box, Button, HStack } from "@chakra-ui/react";

export default function Nav() {
  const [session, loading] = useSession();

  return <View session={session} loading={loading} />;
}

export function View({ session, loading }) {
  return (
    <Grid
      as="nav"
      gridRow="nav"
      gridColumn="sidebar / home"
      data-cy="nav"
      templateColumns="[title] 10rem [user] auto"
      m={2}
    >
      {/* MenuItems are not rendered unless Menu is open */}
      <Box sx={{ gridColumn: "title" }}>
        <a href="/">thisbounty.com</a>
      </Box>
      {!session && (
        <Box sx={{ gridColumn: "user" }}>
          <Button
            data-cy="signIn"
            bg="brand.200"
            _hover={{ background: "brand.300" }}
            size="xs"
            onClick={() => signIn()}
          >
            Sign in
          </Button>
        </Box>
      )}
      {session && (
        <Box sx={{ gridColum: "user" }}>
          <HStack spacing="24px">
            <Text fontSize="xs">Welcome, {session.user.name}</Text>
            <Button
              data-cy="signOut"
              bg="brand.200"
              _hover={{ background: "brand.300" }}
              size="xs"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </HStack>
        </Box>
      )}
    </Grid>
  );
}
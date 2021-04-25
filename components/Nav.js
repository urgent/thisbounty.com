import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Grid, Text, Box, Button } from "@chakra-ui/react";

export default function Nav() {
  const [session, loading] = useSession();

  return <View session={session} loading={loading} />;
}

export function View({ session, loading }) {
  return (
    <Grid
      as="nav"
      gridRow="nav"
      data-cy="nav"
      templateColumns="[home] 120px [user] 1fr"
      m={2}
    >
      {/* MenuItems are not rendered unless Menu is open */}
      <Box sx={{ gridColum: "home" }}>
        <a href="/">thisbounty.com</a>
      </Box>
      {!session && (
        <Box sx={{ gridColum: "user" }}>
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
          <Text fontSize="xs">Welcome, {session.user.name}</Text>
          <Button data-cy="signOut" onClick={() => signOut()}>
            Sign out
          </Button>
        </Box>
      )}
    </Grid>
  );
}
